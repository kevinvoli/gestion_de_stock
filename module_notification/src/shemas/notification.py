from datetime import datetime
from sqlmodel import Field, SQLModel, Relationship



class NotificationsBase(SQLModel):
    type_notification: str = Field(index=True)
    produit_id: int | None = Field(default=None, index=True)
    user_id: int | None = Field(default=None, index=True)
    message: str = Field(index=True)
    status: str = Field(default="non-lu", index=True)



class NotificationsResponse(NotificationsBase):
    id: int | None =  Field(default=None, primary_key=True)


class NotificationsUpdate(NotificationsBase):
    pass


class NotificationsCreate(NotificationsBase):
    date_envoi: datetime = Field(default=datetime.now())