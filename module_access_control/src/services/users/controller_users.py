import json
from database.orm import MiniORM
from models.tables import Utilisateurs

user_orm = MiniORM(Utilisateurs)



def controller_service_user(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_user":
        return user_orm.get_all()
    elif cmd == "findOne_user":
        return json.loads(user_orm.get_by_id(id=id))
    elif cmd == "create_user":
        return user_orm.create(data=message_data)
    elif cmd == "update_user":
        return user_orm.update(data=message_data)
    elif cmd == "remove_user":
        return user_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}