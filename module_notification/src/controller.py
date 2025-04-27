import json
#from Category.controller_category import controller_service_category
from services.notifications.controller_notifications import controller_service_notification


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
    
    if entite == "notification":
        return controller_service_notification(cmd=cmd, message_data=message_data)
    