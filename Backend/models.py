from datetime import datetime
from sqlalchemy import Column, String, Integer, Boolean, DateTime
from sqlalchemy.orm import declarative_base
from database import engine

Base = declarative_base()

class User(Base):

    __tablename__ = "user"

    user_id = Column(Integer,primary_key=True,index=True)
    user_name = Column(String(15),index=True)
    user_email = Column(String(40),index=True)
    user_password = Column(String(150))
    user_contact = Column(String(10))
    user_city = Column(String(15))

class Journalist(Base):

    __tablename__ = "journalist"

    journalist_id = Column(Integer,primary_key=True,index=True)
    journalist_name = Column(String(15),index=True)
    journalist_email = Column(String(40),index=True)
    journalist_contact = Column(String(10))
    journalist_city = Column(String(15))
    journalist_password = Column(String(150))


# Create the database tables
Base.metadata.create_all(bind=engine)
