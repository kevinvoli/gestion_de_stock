from datetime import datetime
from sqlmodel import Field, SQLModel, Relationship




class PermissionsBase(SQLModel):
    role_id: int = Field(index=True)
    module: str | None = Field(default=None, index=True)
    action: str | None = Field(default=None, index=True)
    role_id: int = Field(index=True)
    
    
class PermissionsResponse(PermissionsBase):
    id: int | None =  Field(default=None, primary_key=True)



class PermissionsCreate(PermissionsBase):
    pass