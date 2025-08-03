from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float

class Users(Base):
    __tablename__ = 'Users'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String,  unique=True)
    username = Column(String, unique=True)
    password = Column(String, unique=True)

    def __repr__(self):
        return f"<User(id={self.id}, username={self.username}, email={self.email})>"