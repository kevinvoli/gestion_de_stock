from services.clients.controller_client import controller_service_client
from services.commande.controller_commande import controller_service_commande
from services.commande_details.controller_commande_details import  controller_service_commande_detail
from services.fournisseurs.controller_fournisseur import controller_service_fournisseur


def ControllerEntite(entite:str, cmd:str, message_data: dict, ip:str):
    
    if entite == "clients":
        return controller_service_client(cmd=cmd, message_data=message_data)
    elif entite == "commande":
        return controller_service_commande(cmd=cmd, message_data=message_data)
    elif entite == "commande_details":
        return controller_service_commande_detail(cmd=cmd, message_data=message_data)
    elif entite == "fournisseurs":
        return controller_service_fournisseur(cmd=cmd, message_data=message_data)