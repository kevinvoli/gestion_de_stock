import json
#from Category.controller_category import controller_service_category
from services.notifications.controller_notifications import controller_service_notification




def ControllerEntite(entite:str, cmd:str, message_data: dict, ip:str):
    
    if entite == "notification":
        return controller_service_notification(cmd=cmd, message_data=message_data)
    