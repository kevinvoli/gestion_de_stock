from sqlmodel import Session, SQLModel, create_engine
#from decouple import config

import os




#SQLALCHEMY_DATABASE_URL = f"{DATABASE_TYPE}+mysqlconnector://{MYSQL_USER}{MYSQL_PASSWORD}@{MYSQL_PORT}:{MYSQL_PORT}/{MYSQL_DATABASE}"
SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://root:12345678@127.0.0.1:3306/depottrack_db"

connect_args = {"check_same_thread": False}
engine = create_engine(SQLALCHEMY_DATABASE_URL)



def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
    