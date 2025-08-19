from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime, timezone
from typing import Optional
import sqlalchemy as sa
import sqlalchemy.orm as so
from app import db, login


@login.user_loader
def load_user(_id):
    return db.session.get(User, int(_id))


class User(UserMixin, db.Model):
    id:            so.Mapped[int] = so.mapped_column(primary_key=True)
    username:      so.Mapped[str] = so.mapped_column(sa.String(64), index=True, unique=True)
    email:         so.Mapped[str] = so.mapped_column(sa.String(128), index=True, unique=True)
    password_hash: so.Mapped[Optional[str]] = so.mapped_column(sa.String(256))

    def __repr__(self):
        return f'<User {self.username}>'

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Booking(db.Model):
    id:        so.Mapped[int] = so.mapped_column(primary_key=True)
    name:     so.Mapped[str] = so.mapped_column(sa.String(128))
    email:     so.Mapped[str] = so.mapped_column(sa.String(128))
    phone:     so.Mapped[str] = so.mapped_column(sa.String(128))
    comment:   so.Mapped[Optional[str]] = so.mapped_column(sa.String(8192), default="")

    startDate:   so.Mapped[datetime] = so.mapped_column(index=True, default=lambda: datetime.now(timezone.utc))
    createdAt:   so.Mapped[datetime] = so.mapped_column(index=True, default=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return f'<Booking "{self.name}", {self.startDate}>'

    def to_dict(self):
        return dict(id=self.id, name=self.name, email=self.email, createdAt=self.createdAt, phone=self.phone, comment=self.comment, startDate=self.startDate)
