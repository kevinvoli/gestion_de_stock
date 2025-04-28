import requests
from requests.exceptions import RequestException, ConnectionError
import socket

from utils.logs.loggers import logger
from utils.server.ip import get_ip



serviceName = "ServiceCommande"
host = get_ip()



def register_services():

    url = f"http://{host}:3003/discovery/register"
    payload = {
        "nom": serviceName,
        "host": host,
        "port": 3003,
        "protocole": 'tcp',
        "cleApi": "esrthyjufthyg",
    }
    
    try:
        response = requests.post(url, payload, timeout=5)
        if response.status_code in (200, 201):
            logger.info(f"✅ Module module Commande est enregistré sous le nom {serviceName}")
        else:
            logger.error("⛔ Erreur lors de l'enregistrement du service:", response.text)
    except ConnectionError as e:
        logger.error(f"⛔ Impossible de se connecter au serveur du gateway")
    except RequestException as e:
        logger.exception(f"⛔ Exception lors de l’enregistrement du service")
    except Exception as e:
        logger.exception(f"⛔ Erreur inattendue non réseau : {e}")