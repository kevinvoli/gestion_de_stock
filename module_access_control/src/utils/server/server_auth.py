import json
import asyncio

from controller import ControllerEntite
from utils.security.verify_service import is_valid_api_key, json_verify
from utils.security.security_manager import SecurityManager
from utils.logs.loggers import logger
from utils.server.ip import get_ip



host = get_ip()
security = SecurityManager(max_attempts=5, block_time=300) 

async def handle_client(reader: asyncio.StreamReader, writer: asyncio.StreamWriter):
    """
    Gère une connexion client, filtre le message et le r
    """

    try:
        
        # Initialisation des differentes Variable
        client_address = writer.get_extra_info("peername")
        data = await reader.read(1024)  # Lecture unique
        ip = client_address[0]
        response_security = None
        message = json_verify(data) # Verifier si les data reçu est au format souhaité (json)
        pattern = message.get("pattern", {})
        cmd = pattern.get('cmd')
        data = message.get("data", {})
        entite = data.get("moduleName")
        service_name = data.get("serviceName")
        api_key = data.get("cle_Api")
        message_data = data.get("data", {})
        id_ = message.get("id")

        if not data:
            logger.warning(f"❌ Client {client_address} déconnecté sans envoi de données")
            return
        
        # Verifier si le clent client est bloqué
        if security.is_blocked(ip):
            response = {'message': "Vous êtes temporairement bloqué. Réessayez plus tard.\n"}
            logger.error(f"⛔ Accès refusé - Requête ID: {ip},  Ip bloqué")
            writer.write(json.dumps(response).encode())
            await writer.drain()
            return
        
        
        # Verification des permissions et securite contres les attaques
        is_verfy = is_valid_api_key(api_key=api_key, service_name=service_name) 
        if is_verfy is True:
            if entite in ['permissions', 'roles', 'users']:
                security.reset_attempts(ip)
                response = ControllerEntite(entite=entite,cmd=cmd, message_data=message_data, ip=ip)
                logger.info(f"✅ Réponse envoyée - {response}")
            else:
                
                response =  {"status": 'Failed', 'message': f'Le service {entite} ne peut communiquer avec le service Authentification'}
                response_security = security.register_failure(ip)
                logger.error(f"⛔ Accès refusé - Requête ID: {id_}, Entité invalide - {entite}")
        else:
            response = {'erreur': f'Le service {service_name} ne peut communiquer avec le service Authentification'}
            response_security = security.register_failure(ip)
            logger.error(f"⛔ Accès refusé - Requête ID: {id_}, Clé API invalide - {api_key}")


        # Envoyer la réponse au client
        if response_security is not None:
            writer.write(json.dumps(response_security, ensure_ascii=False).encode("utf-8"))
        else:
            writer.write(json.dumps(response, ensure_ascii=False).encode("utf-8"))
        #writer.write(json.dumps(response, ensure_ascii=False).encode("utf-8"))
        await writer.drain()


    except Exception as e:
        logger.exception(f"🔥 Erreur lors du traitement du client {client_address}: {e}")
    finally:
        writer.close()
        await writer.wait_closed()
        logger.info(f"🔌 Connexion fermée pour {client_address}")



async def server_tcp_auth():
    
    asyncio.create_task(security.cleanup_blocked_ips())  # Démarrer la suppression automatique des IP bloquées
    # Création du serveur TCP
    server = await asyncio.start_server(
        handle_client, host, 3004  # Adresse et port du serveur
    )

    addr = server.sockets[0].getsockname()
    logger.info(f"📡 Serveur en écoute sur {addr}")

    # Démarrage du serveur
    async with server:
        await server.serve_forever()

# Lancement de la boucle principale asyncio

