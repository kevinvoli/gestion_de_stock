import json
from database.orm import MiniORM
from models.tables import Roles

role_orm = MiniORM(Roles)


def controller_service_role(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_role":
        return role_orm.get_all()
    elif cmd == "findOne_role":
        return json.loads(role_orm.get_by_id(id=id))
    elif cmd == "create_role":
        return role_orm.create(data=message_data)
    elif cmd == "update_role":
        return role_orm.update(data=message_data)
    elif cmd == "remove_role":
        return role_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}
    

