from fastapi import APIRouter, Depends, FastAPI, HTTPException, Form
from databases import Database
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta
from sqlalchemy import create_engine
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app and router
app = FastAPI(tags=['User'])
router = APIRouter()

# Allow all origins (not recommended for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


# Database setup
DATABASE_URL = "mysql+mysqlconnector://root@localhost/test1"  # Adjust for your database
engine = create_engine(DATABASE_URL)

# User model
class User(BaseModel):
    id: int
    username: str
    password_hash: str

# Database dependency
def get_database():
    database = Database(DATABASE_URL)
    return database

# Login endpoint
@router.post("/login")
async def login(database: Database = Depends(get_database)):
    await database.connect()
    user = await database.fetch_one("SELECT * FROM user WHERE username = :username", {"username": username})
    await database.disconnect()
    return "sucessfull"


# Main application
app.include_router(router)

# Run the server (optional)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
