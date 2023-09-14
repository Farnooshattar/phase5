from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def index():
    return '<h1>Welcome to my app!</h1>'


@app.route('/users', methods=['GET', 'POST'])
def userss():
    if request.method == 'GET':
        users = []
        for user in User.query.order_by(User.last_name.asc()).all():
            user_dict = user.to_dict()
            users.append(user_dict)

    response = make_response(
        jsonify(users),
        200
    )
    return response


if __name__ == "__main__":
    app.run(port=5555)
