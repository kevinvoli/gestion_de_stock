import json
from database.orm import MiniORM
from models.tables import Notifications

notification_orm = MiniORM(Notifications)


def controller_service_notification(cmd, message_data):
    
    id = message_data.get('id')
    
    if cmd == "findAll_notification":
        return notification_orm.get_all()
    elif cmd == "findOne_notification":
        return json.loads(notification_orm.get_by_id(id=id))
    elif cmd == "create_notification":
        return notification_orm.create(data=message_data)
    elif cmd == "update_notification":
        return notification_orm.update(data=message_data)
    elif cmd == "remove_notification":
        return notification_orm.delete(id=id)
    else:
        return {'erreur': 'cmd non conforme'}