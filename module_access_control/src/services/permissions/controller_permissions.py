import json
from database.orm import MiniORM
from models.tables import Permissions

permission_orm = MiniORM(Permissions)



def controller_service_permission(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_permission":
        return permission_orm.get_all()
    elif cmd == "findOne_permission":
        return json.loads(permission_orm.get_by_id(id=id))
    elif cmd == "create_permission":
        return permission_orm.create(data=message_data)
    elif cmd == "update_permission":
        return permission_orm.update(data=message_data)
    elif cmd == "remove_permission":
        return permission_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}