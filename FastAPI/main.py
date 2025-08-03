from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated, List
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
)

class UsersBase(BaseModel):
    email: str
    username: str
    password: str

class UsersModel(UsersBase):
    id: int

    class Config:
        orm_mode = True


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

models.Base.metadata.create_all(bind=engine)


@app.post("/users/", response_model=UsersModel)
async def create_users(users: UsersBase, db: db_dependency): # type: ignore
    db_users = models.Users(**users.dict())
    db.add(db_users)
    db.commit()
    db.refresh(db_users)
    return db_users

@app.get("/users/", response_model=list[UsersModel])
async def read_users(db: db_dependency, skip: int = 0, limit: int = 100): # type: ignore
    users = db.query(models.Users).offset(skip).limit(limit).all()
    return users