import json
from database.orm import MiniORM
from models.tables import Commande


commande_orm = MiniORM(Commande)


def controller_service_commande(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_commande":
        return commande_orm.get_all()
    elif cmd == "findOne_commande":
        return json.loads(commande_orm.get_by_id(id=id))
    elif cmd == "create_commande":
        return commande_orm.create(data=message_data)
    elif cmd == "update_commande":
        return commande_orm.update(data=message_data)
    elif cmd == "remove_commande":
        return commande_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}