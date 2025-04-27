from datetime import datetime
from sqlmodel import Field, SQLModel, Relationship



class RolesBase(SQLModel):
    nom: str = Field(index=True)
    description: str | None = Field(default=None, index=True)
    

class RolesResponse(RolesBase):
    id: int | None =  Field(default=None, primary_key=True)


class RolesCreate(RolesBase):
    pass