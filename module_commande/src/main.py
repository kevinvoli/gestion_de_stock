import asyncio
import uvicorn

from typing import Annotated
from fastapi import FastAPI, Depends
from sqlmodel import  Session

from database.database import create_db_and_tables
from dependencies import get_session
from utils.server.register_commande import register_services
from utils.server.ip import get_ip
from utils.server.server_commande import server_tcp_commande

SessionDep = Annotated[Session, Depends(get_session)]

host = get_ip()
app = FastAPI()


def start_server_tcp():
    asyncio.run(server_tcp_commande())

@app.on_event("startup")
def on_startup():
    register_services()


@app.get("/")
def read_root():
    return {"hello world module commande"}

if __name__ == '__main__':
    uvicorn.run("main:app", host=host, port=8003, reload=True)