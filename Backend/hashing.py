from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"])
def bcrypt(password:str ):
    return pwd_context.hash(password)

def varify(hashed_password, plain_password):
    return pwd_context.verify(plain_password, hashed_password)