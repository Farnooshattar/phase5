from faker import Faker
from datetime import datetime

from app import app
from models import db, User

fake = Faker()
users = []


def make_users():
    User.query.delete()

    for i in range(20):
        first_name = fake.first_name()
        last_name = fake.last_name()
        user = User(
            first_name=first_name,
            last_name=last_name,
            username=f"{first_name}_{last_name}",
            email=fake.email(),
            birthday=datetime.strptime(fake.date(), '%Y-%m-%d').date(),
        )
        users.append(user)

    db.session.add_all(users)
    db.session.commit()


if __name__ == '__main__':
    with app.app_context():
        make_users()
