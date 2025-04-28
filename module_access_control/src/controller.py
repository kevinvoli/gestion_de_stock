from utils.logs.loggers import logger
from services.roles.controller_roles import controller_service_role
from services.users.controller_users import controller_service_user
from services.permissions.controller_permissions import controller_service_permission


def ControllerEntite(entite:str, cmd:str, message_data: dict, ip:str):
    
    if entite == "permissions":
        return controller_service_permission(cmd=cmd, message_data=message_data)
    elif entite == "roles":
        return controller_service_role(cmd=cmd, message_data=message_data)
    elif entite == "users":
        return controller_service_user(cmd=cmd, message_data=message_data)
    