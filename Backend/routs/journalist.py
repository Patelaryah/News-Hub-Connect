from typing import List
from fastapi import APIRouter, Depends,HTTPException,status
from sqlalchemy.orm import Session
import hashing
import models
import schemas
import tokan
from database import get_db

router = APIRouter( tags=['journalist'])

# get all journalist
@router.get('/journalist',response_model=List[schemas.Show_journalist])
def get_journalist(db:Session=Depends(get_db)):
    journalist = db.query(models.Journalist).all()
    return journalist

# ewgister journalist
@router.post('/journalist_register/')
def journalist_register(request:schemas.Journalist ,db:Session = Depends(get_db)):
    new_journalist = models.Journalist(journalist_name=request.journalist_name,
                                       journalist_email=request.journalist_email,
                                       journalist_contact=request.journalist_contact,
                                       journalist_city=request.journalist_city,
                                       journalist_password=hashing.bcrypt(request.journalist_password))
    db.add(new_journalist)
    db.commit()
    return "succesful"

# login journalist
@router.post('/journalist_login')
def login(request:schemas.Journalist_login , db: Session = Depends(get_db)):
    jrl = db.query(models.Journalist).filter(models.Journalist.journalist_email == request.journalist_email).first()
    if not jrl:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="invalid username")

    if not hashing.varify(jrl.journalist_password,request.journalist_password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="password inncorrect")

    access_token = tokan.create_access_token(data={"sub": jrl.journalist_email})
    print(access_token)
    return {"access_token": access_token, "token_type": "bearer"}