from pydantic import BaseModel
from typing import Optional
class User(BaseModel):
    user_name : str
    user_email : str
    user_password : str
    user_contact : str
    user_city : str


class Show_user(BaseModel):
    user_name: str
    user_email: str
    user_contact: str
    user_city: str
class Show_journalist(BaseModel):
    journalist_name: str
    journalist_email: str
    journalist_contact: str
    journalist_city: str
class Journalist(BaseModel):
    journalist_name : str
    journalist_email : str
    journalist_password : str
    journalist_contact : str
    journalist_city : str

class User_login(BaseModel):
    user_email : str
    user_password  : str


class Journalist_login(BaseModel):
    journalist_email : str
    journalist_password : str


class TokenData(BaseModel):
    email:Optional[str] =None


class Token(BaseModel):
    access_token: str
    token_type: str
