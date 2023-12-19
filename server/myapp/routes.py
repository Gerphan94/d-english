from flask import Blueprint, jsonify, request
from flask_pymongo import PyMongo
from bson import json_util  # Add this import
import json
mongo = PyMongo()


main = Blueprint('main', __name__)

@main.route('/api/get_users')
def get_users():
    users = mongo.db.users.find()
    
    users_list = list(users)
    return json.loads(json_util.dumps(users_list)) 

