from datetime import datetime
from sqlmodel import Field, SQLModel, Relationship





class UtilisateursBase(SQLModel):
    nom: str = Field(index=True)
    email: str | None = Field(default=None, index=True)
    role_id: int = Field(index=True)
    mot_de_passe: str | None = Field(default=None, index=True)


class UtilisateursResponse(UtilisateursBase):
    id: int | None =  Field(default=None, primary_key=True)
    
    
class UtilisateursCreate(UtilisateursBase):
    pass