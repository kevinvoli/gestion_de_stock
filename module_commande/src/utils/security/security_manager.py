import time
import asyncio
from collections import defaultdict
from utils.logs.loggers import logger

class SecurityManager:
    
    """
    Gère la sécurité du serveur TCP :
    - Protection contre les attaques de force brute
    - Suivi des tentatives échouées
    - Blocage temporaire des IP suspectes
    - Envoi d'alertes en cas de tentatives répétées
    """

    def __init__(self, max_attempts=5, block_time=300):
        """
        Initialise la gestion de sécurité.
        :param max_attempts: Nombre de tentatives avant blocage
        :param block_time: Temps de blocage en secondes
        """
        self.failed_attempts = defaultdict(lambda: {"count": 0, "blocked_until": 0})
        self.max_attempts = max_attempts
        self.block_time = block_time

    def is_blocked(self, ip):
        """
        Vérifie si une IP est bloquée.
        :param ip: Adresse IP à vérifier
        :return: True si l'IP est bloquée, sinon False
        """
        return time.time() < self.failed_attempts[ip]["blocked_until"]

    def register_failure(self, ip):
        """
        Enregistre une tentative échouée pour une IP.
        :param ip: Adresse IP du client
        """
        self.failed_attempts[ip]["count"] += 1
        logger.warning(f"❌ Tentative échouée depuis {ip} ({self.failed_attempts[ip]['count']} / {self.max_attempts})")

        # Vérifie si l'IP doit être bloquée
        if self.failed_attempts[ip]["count"] >= self.max_attempts:
            self.failed_attempts[ip]["blocked_until"] = time.time() + self.block_time
            logger.critical(f"🚨 IP bloquée pour {self.block_time // 60} minutes : {ip}")
            asyncio.create_task(self.send_alert(ip))  # 🔥 Envoie une alerte en arrière-plan
            return {"Erreur": "FAILLED", "message": "Vous êtes temporairement bloqué. Réessayez plus tard."}

    def reset_attempts(self, ip):
        """
        Réinitialise le compteur d'échecs pour une IP après une tentative réussie.
        :param ip: Adresse IP du client
        """
        self.failed_attempts[ip]["count"] = 0

    async def send_alert(self, ip):
        """
        Simule l'envoi d'une alerte en cas de tentatives suspectes.
        :param ip: Adresse IP suspecte
        """
        subject = "🚨 Alerte de Sécurité - IP suspecte détectée"
        message = f"Une IP a été bloquée après {self.max_attempts} tentatives échouées.\n\nIP: {ip}\nBlocage actif pour {self.block_time // 60} minutes."
        logger.critical(f"📧 Envoi d'alerte : {subject}\n{message}")
        # Ici, je peux appeler une vraie fonction d'envoi d'email
    
    async def cleanup_blocked_ips(self):
        """ Nettoie périodiquement les IP bloquées après expiration """
        while True:
            now = time.time()
            to_unblock = [
                    ip for ip, info in self.failed_attempts.items()
                    if info["blocked_until"] <= now and info["count"] >= self.max_attempts
                ]
            for ip in to_unblock:
                logger.info(f"✅ Déblocage automatique de l'IP : {ip}")
                del self.failed_attempts[ip]  # Supprime l'IP de la liste des bloqués

            await asyncio.sleep(60)  # Vérification toutes les 60 secondes
