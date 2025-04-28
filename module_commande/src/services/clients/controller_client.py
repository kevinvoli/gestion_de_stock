import json
from database.orm import MiniORM
from models.tables import Client


client_orm = MiniORM(Client)


def controller_service_client(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_client":
        return client_orm.get_all()
    elif cmd == "findOne_client":
        return json.loads(client_orm.get_by_id(id=id))
    elif cmd == "create_client":
        return client_orm.create(data=message_data)
    elif cmd == "update_client":
        return client_orm.update(data=message_data)
    elif cmd == "remove_client":
        return client_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}