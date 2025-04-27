import json

from utils.logs.loggers import logger
from services.roles.controller_roles import controller_service_role
from services.users.controller_users import controller_service_user
from services.permissions.controller_permissions import controller_service_permission

def json_verify(data: dict):
    
    # Décodage en chaîne de caractères
    decoded_data = data.decode().strip()

    # Suppression du préfixe avant `{`
    json_start = decoded_data.find("{")
    if json_start != -1:
        cleaned_json = decoded_data[json_start:]  # Récupérer uniquement la partie JSON

        # Parsing JSON
        try:
            message = json.loads(cleaned_json)
            return message
        except json.JSONDecodeError as e:
            print("Erreur JSON :", e)
            response = {f"error": "Message non valide (JSON attendu)"}
    else:
        print("Format invalide")
        response = {"erreur" :"Format invalide"}




def ControllerEntite(entite:str, cmd:str, message_data: dict, ip:str):
    
    if entite == "permissions":
        return controller_service_permission(cmd=cmd, message_data=message_data)
    elif entite == "roles":
        return controller_service_role(cmd=cmd, message_data=message_data)
    elif entite == "users":
        return controller_service_user(cmd=cmd, message_data=message_data)
    