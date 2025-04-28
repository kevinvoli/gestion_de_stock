from sqlmodel import Session, SQLModel, create_engine
import os

MYSQL_HOST = os.getenv("MYSQL_HOST") 
MYSQL_PORT = os.getenv("MYSQL_PORT")
MYSQL_USER = os.getenv("MYSQL_USER")   
MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD") 
MYSQL_DATABASE = os.getenv("MYSQL_DATABASE") 
SERVER_PORT = os.getenv("SERVER_PORT") 


#SQLALCHEMY_DATABASE_URL = f"{DATABASE_TYPE}+mysqlconnector://{MYSQL_USER}{MYSQL_PASSWORD}@{MYSQL_PORT}:{MYSQL_PORT}/{MYSQL_DATABASE}"
SQLALCHEMY_DATABASE_URL = f"mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}:3306/{MYSQL_DATABASE}"

connect_args = {"check_same_thread": False}
engine = create_engine(SQLALCHEMY_DATABASE_URL)



def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
    