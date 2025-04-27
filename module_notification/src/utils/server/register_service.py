import requests
from requests.exceptions import RequestException, ConnectionError
import socket

from utils.logs.loggers import logger




def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Utiliser 8.8.8.8 comme serveur DNS
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip




serviceName = "ServiceNotif"
host = get_ip()

def register_service():
    
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
            logger.info(f"✅ Module stock est enregistré sous le nom {serviceName}")
        else:
            logger.error("⛔ Erreur lors de l'enregistrement du service:")
    except ConnectionError as e:
        logger.error(f"⛔ Impossible de se connecter au serveur du gateway")
    except RequestException as e:
        logger.exception(f"⛔ Exception lors de l’enregistrement du service {serviceName}")
    except Exception as e:
        logger.exception(f"⛔ Erreur inattendue non réseau : {e}")