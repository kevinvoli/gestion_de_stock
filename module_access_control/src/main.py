import asyncio
import uvicorn

from threading import Thread
from typing import Annotated
from fastapi import FastAPI, Depends
from sqlmodel import Session

from database.database import create_db_and_tables
from dependencies import get_session
from utils.server.register_service import register_services
from utils.server.server_auth import server_tcp_auth

SessionDep = Annotated[Session, Depends(get_session)]

app = FastAPI()

def start_server_tcp_auth():
    asyncio.run(server_tcp_auth()) 

@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    thread = Thread(target=start_server_tcp_auth, daemon=True)
    thread.start()
    register_services()
    
    


@app.get("/")
def read_root():
    return {"hello world 1"}

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)