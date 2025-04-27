from sqlmodel import Session, SQLModel, create_engine
#from decouple import config

import os



SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:12345678@127.0.0.1:3306/depottrack_db"
sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(SQLALCHEMY_DATABASE_URL)




def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
