from sqlmodel import Session, select
import json
from models.tables import Services
from database.database import engine
from utils.logs.loggers import logger


def get_service_by_api_key(api_key: str, service_name: str) -> bool:
    with Session(engine) as session:
        statement = select(Services).where(
            (Services.cle_API == api_key) &
            (Services.nom == service_name)
        )
        service = session.exec(statement).first()
        
        if service:
            logger.info(f"✅ Accès autorisé - Service: {service.nom}, API Key: {api_key}")
            return True
        logger.warning(f"⛔ Accès refusé - Clé API invalide: {api_key} ou Nom Service invalide: {service_name}")
        return False