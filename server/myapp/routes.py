from flask import Blueprint, jsonify
from myapp.models import db, Users

main = Blueprint('main', __name__)

@main.route('/api/get_users')
def index():
    users = Users.objects()
    return jsonify(users)