import json
from database.orm import MiniORM
from models.tables import Fournisseur


fournisseur_orm = MiniORM(Fournisseur)


def controller_service_fournisseur(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_fournisseur":
        return fournisseur_orm.get_all()
    elif cmd == "findOne_fournisseur":
        return json.loads(fournisseur_orm.get_by_id(id=id))
    elif cmd == "create_fournisseur":
        return fournisseur_orm.create(data=message_data)
    elif cmd == "update_fournisseur":
        return fournisseur_orm.update(data=message_data)
    elif cmd == "remove_fournisseur":
        return fournisseur_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}