from  datetime import datetime
from sqlmodel import Field, SQLModel


class Commande(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    type_commande: str = Field(default=None)
    date: datetime = Field(default_factory=datetime.now())
    statut: str = Field(default=None, max_length=50)
    client_id: int = Field(default=None, foreign_key="clients.id")
    fournisseur_id: int = Field(default=None, foreign_key="fournisseurs.id")
    created_at: datetime = Field(default=datetime.now())
    updated_at: datetime = Field(default=datetime.now())
    delected_at: datetime = Field(default=datetime.now())
    

class DetailCommande(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    commande_id: int = Field(default=None, foreign_key="commandes.id")
    produit_id: int = Field(default=None)
    quantite: int
    prix_unitaire: float


class Fournisseur(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    nom: str = Field(max_length=100)
    adresse: str = None
    contact: str = Field(default=None, max_length=50)
    created_at: datetime = Field(default=datetime.now())
    updated_at: datetime = Field(default=datetime.now())
    delected_at: datetime = Field(default=datetime.now())
    

class Client(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    nom: str = Field(max_length=100)
    adresse: str = None
    contact: str = Field(default=None, max_length=50)
    created_at: datetime = Field(default=datetime.now())
    updated_at: datetime = Field(default=datetime.now())
    delected_at: datetime = Field(default=datetime.now())
    


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