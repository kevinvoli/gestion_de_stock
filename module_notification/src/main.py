import asyncio
import uvicorn

from typing import Annotated
from threading import Thread
from fastapi import FastAPI, Depends
from sqlmodel import Session
from contextlib import asynccontextmanager



from database.database import create_db_and_tables
from dependencies import get_session
from utils.server.register_service import register_service
from utils.server.server_notif import server_tcp_notif
from utils.server.ip import get_ip

SessionDep = Annotated[Session, Depends(get_session)]

host = get_ip()
app = FastAPI()


def start_server_tcp_otif():
    asyncio.run(server_tcp_notif())
    
    


@app.on_event("startup")
def on_startup():
    create_db_and_tables()
    thread = Thread(target=start_server_tcp_otif, daemon=True)
    thread.start()
    register_service()
   



@app.get("/")
def read_root():
    return {"hello world 2"}


if __name__ == '__main__':
    uvicorn.run("main:app", host=host, port=8002, reload=True)