from flask import Blueprint, jsonify, request, make_response
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
import json


mongo = PyMongo()
main = Blueprint('main', __name__)

@main.errorhandler(404)
def handle_404_error(_error):
    """Return a http 404 error to client"""
    return make_response(jsonify({'error': 'Not found'}), 404)


@main.route('/api/get_users', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    users_list = list(users)
    return json.loads(json_util.dumps(users_list))

# SUBJECT
# get subject
@main.route('/api/get_subjects', methods=['GET'])
def get_subjects():
    subjects = mongo.db.subject.find()
    return json.loads(json_util.dumps(list(subjects)))

# insert subject
@main.route('/api/add_subject', methods=["POST"])
def add_subject():
    data = request.get_json()
    name = data['name']
    
    new_data = {
        "name": name
    }
    _id = mongo.db.subject.insert_one(new_data).inserted_id
    return jsonify({"message": "Success!"})

# SECTION
# get section
@main.route('/api/get_sections/<string:subject_id>', methods=['GET'])
def get_sections(subject_id):
    objID = ObjectId(subject_id)
    sections = mongo.db.section.find({'subject_id': objID})
    return json.loads(json_util.dumps(list(sections)))
    
# insert section
@main.route('/api/add_section/<string:subject_id>', methods=["POST"])
def add_section(subject_id):
    
    subject = mongo.db.subject.find_one_or_404({'name': subject_id})
    if subject:
        data = request.get_json()
        name = data['name']
        new_data = {
            'name': name,
            'subject_id': subject_id
        }
        _id = mongo.db.section.insert_one(new_data).inserted_id
        return jsonify({"message": "Success!"})


# get word
@main.route('/api/get_words/<string:section_id>', methods=['GET'])
def get_words(section_id):
    objId = ObjectId(section_id)
    words = mongo.db.word.find({'section_id': objId})
    return json.loads(json_util.dumps(list(words)))

# insert word
@main.route('/api/add_word/<string:section_name>', methods=["POST"])
def add_word(section_name):
    
    section = mongo.db.section.find_one_or_404({'name': section_name})
    if section:
        data = request.get_json()
        english = data['english']
        vietnamese = data['vietnamese']
        new_data = {
            'english': english,
            'vietnamese': vietnamese,
            'section_name': section_name
        }
        _id = mongo.db.word.insert_one(new_data).inserted_id
        return jsonify({"message": "Success!"})
