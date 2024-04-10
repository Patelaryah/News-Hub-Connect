from typing import List
from fastapi import APIRouter, Depends,HTTPException,status
from sqlalchemy.orm import Session
import hashing
import models as md
import schemas
import tokan
from database import get_db
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter( tags=['User'])
# user register
@router.post('/user_register/')
def index(request:schemas.User ,db:Session = Depends(get_db)):
    new_user = md.User(user_name=request.user_name,
                           user_email=request.user_email,
                           user_password=hashing.bcrypt(request.user_password),
                           user_contact=request.user_contact,
                           user_city=request.user_city)
    db.add(new_user)
    db.commit()
    return "succesful"

# show user
@router.get('/users',response_model=List[schemas.Show_user])
def get_user(db:Session=Depends(get_db)):
    user = db.query(md.User).all()
    return user

# user login
@router.post('/login')
def login(request:OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    usr = db.query(md.User).filter(md.User.user_email == request.username).first()
    if not usr:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="invalid username")

    if not hashing.varify(usr.user_password,request.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="password inncorrect")
    
    access_token = tokan.create_access_token(data={"sub": usr.user_email})
    return access_token

