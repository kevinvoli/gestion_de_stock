from sqlmodel import Session, select
from database.database import engine
from utils.logs.loggers import logger
import json


from datetime import datetime
import json

def serialize_data(data):
    """
    Convertit les objets datetime en chaînes lisibles avant JSON serialization.
    """
    if isinstance(data, list):
        return [serialize_data(item) for item in data]
    elif isinstance(data, dict):
        return {key: serialize_data(value) for key, value in data.items()}
    elif isinstance(data, datetime):
        return data.isoformat()  # Convertit datetime en chaîne ISO 8601
    return data




class MiniORM:
    def __init__(self, model):
        """
        Initialise l'ORM avec un modèle SQLModel.
        :param model: La classe SQLModel correspondant à la table.
        """
        self.model = model

    def validate_data(self, data):
        """
        Vérifie les règles métiers spécifiques à chaque table.
        À redéfinir si besoin dans une classe enfant.
        """
        return True, None  # (is_valid, error_message)

    def get_all(self):
        """ Récupère toutes les entrées de la table avec logs. """
        with Session(engine) as session:
            statement = select(self.model)
            results = session.exec(statement).all()
        
        logger.info(f"📜 Récupération de {len(results)} entrées depuis {self.model.__name__}")
        return serialize_data([entry.model_dump() for entry in results])

    def get_by_id(self, id: int):
        """ Récupère une entrée par son ID avec logs. """
        with Session(engine) as session:
            statement = select(self.model).where(self.model.id == id)
            result = session.exec(statement).first()
        
        if result:
            logger.info(f"🔍 Récupération de {self.model.__name__} ID={id}")
            return json.dumps(serialize_data(result.model_dump()))
        
        logger.warning(f"⚠️  {self.model.__name__} ID={id} introuvable")
        return json.dumps({"error": "Donnée non trouvée"})

    def create(self, data: dict):
        """ Crée une nouvelle entrée avec validation et transaction. """
        is_valid, error_message = self.validate_data(data)
        if not is_valid:
            logger.warning(f"❌ Erreur de validation pour {self.model.__name__}: {error_message}")
            return {"error": error_message}

        with Session(engine) as session:
            try:
                new_entry = self.model(**data)
                session.add(new_entry)
                session.commit()
                session.refresh(new_entry)
                logger.info(f"✅ {self.model.__name__} créé avec succès: {new_entry.model_dump()}")
                return serialize_data(new_entry.model_dump())
            except Exception as e:
                session.rollback()
                logger.error(f"🔥 Erreur lors de l'insertion dans {self.model.__name__}: {e}")
                return {"error": "Erreur lors de la création"}

    def update(self, data: dict):
        """ Met à jour une entrée existante avec logs et transaction. """
        with Session(engine) as session:
            statement = select(self.model).where(self.model.id == data["id"])
            entry = session.exec(statement).first()

            if not entry:
                logger.warning(f"⚠️ {self.model.__name__} ID={data['id']} introuvable pour mise à jour")
                return {"error": "Donnée non trouvée"}

            try:
                for key, value in data.items():
                    if hasattr(entry, key):
                        setattr(entry, key, value)

                session.add(entry)
                session.commit()
                session.refresh(entry)
                logger.info(f"🔄 {self.model.__name__} ID={data['id']} mis à jour avec succès")
                return serialize_data(entry.model_dump())
            except Exception as e:
                session.rollback()
                logger.error(f"🔥 Erreur lors de la mise à jour de {self.model.__name__}: {e}")
                return {"error": "Erreur lors de la mise à jour"}

    def delete(self, id: int):
        """ Supprime une entrée (changement de statut) avec logs et transaction. """
        with Session(engine) as session:
            statement = select(self.model).where(self.model.id == id)
            entry = session.exec(statement).first()

            if not entry:
                logger.warning(f"⚠️ {self.model.__name__} ID={id} introuvable pour suppression")
                return {"error": "Donnée non trouvée"}

            try:
                entry.status = "non-actif"
                session.add(entry)
                session.commit()
                session.refresh(entry)
                logger.info(f"🗑️ {self.model.__name__} ID={id} marqué comme non-actif")
                return {"message": f"L'entrée {id} a été désactivée avec succès"}
            except Exception as e:
                session.rollback()
                logger.error(f"🔥 Erreur lors de la suppression de {self.model.__name__}: {e}")
                return {"error": "Erreur lors de la suppression"}
