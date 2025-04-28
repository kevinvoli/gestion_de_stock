import json
from services.modules.service_module import get_service_by_api_key


def is_valid_api_key(api_key, service_name):
    return get_service_by_api_key(api_key=api_key, service_name=service_name)


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

