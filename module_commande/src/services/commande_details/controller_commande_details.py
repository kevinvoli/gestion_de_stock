import json
from database.orm import MiniORM
from models.tables import DetailCommande


commande_detail_orm = MiniORM(DetailCommande)


def controller_service_commande_detail(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_commande_detail":
        return commande_detail_orm.get_all()
    elif cmd == "findOne_commande_detail":
        return json.loads(commande_detail_orm.get_by_id(id=id))
    elif cmd == "create_commande_detail":
        return commande_detail_orm.create(data=message_data)
    elif cmd == "update_commande_detail":
        return commande_detail_orm.update(data=message_data)
    elif cmd == "remove_commande_detail":
        return commande_detail_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}