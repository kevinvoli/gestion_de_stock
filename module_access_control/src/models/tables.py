
from datetime import datetime
from sqlmodel import Field, SQLModel




class Utilisateurs(SQLModel, table=True):
    id: int | None =  Field(default=None, primary_key=True)
    nom: str = Field(index=True)
    email: str | None = Field(default=None, index=True)
    role_id: int = Field(index=True)
    mot_de_passe: str | None = Field(default=None, index=True)
    created_at: datetime = Field(default=datetime.now())
    updated_at: datetime = Field(default=datetime.now())
    delected_at: datetime = Field(default=datetime.now())
    
   
   

class Roles(SQLModel, table=True):
    id: int | None =  Field(default=None, primary_key=True)
    nom: str = Field(index=True)
    description: str | None = Field(default=None, index=True)
    



class Permissions(SQLModel, table=True):
    id: int | None =  Field(default=None, primary_key=True)
    role_id: int = Field(index=True)
    module: str | None = Field(default=None, index=True)
    action: str | None = Field(default=None, index=True)
    role_id: int = Field(index=True)



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



"""
    CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `module` varchar(50) DEFAULT NULL,
  `action` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

    
"""