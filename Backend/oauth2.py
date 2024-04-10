from fastapi import Depends,HTTPException,status
from fastapi.security import OAuth2PasswordBearer
from tokan import SECRET_KEY,ALGORITHM,verify_token
import tokan

oauth2_scheme= OAuth2PasswordBearer(tokenUrl="login")

def get_current_user(token : str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="could not validate credentials",
         headers={"www-Authenticate":"Bearer"}
    )

    return verify_token(token,credentials_exception)
