from datetime import datetime
from sqlmodel import Field, SQLModel




class Notifications(SQLModel, table=True):
    id: int | None =  Field(default=None, primary_key=True)
    type_notification: str = Field(index=True)
    produit_id: int | None = Field(default=None, index=True)
    user_id: int | None = Field(default=None, index=True)
    message: str = Field(index=True)
    date_envoi: datetime = Field(default=datetime.now())
    status: str = Field(default="non-lu", index=True)
    
    

class Services(SQLModel, table=True):
    id: int | None =  Field(default=None, primary_key=True)
    nom: str | None = Field(default=None, index=True)
    host: str | None = Field(default=None, index=True)
    port: str | None = Field(default=None, index=True)
    protocole: str | None = Field(default=None, index=True)
    cle_API: str | None = Field(default=None, index=True)
    created_at: datetime = Field(default=datetime.now())
    updated_at: datetime = Field(default=datetime.now())
    delected_at: datetime = Field(default=datetime.now())

