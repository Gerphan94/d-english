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

# CLASSIFY
# get classify
@main.route('/api/get_classifies', methods=['GET'])
def get_classifies():
    classifies = mongo.db.classify.find()
    classifies_list = list(classifies)
    return json.loads(json_util.dumps(classifies_list))

# insert classify
@main.route('/api/add_classify', methods=["POST"])
def add_classify():
    data = request.get_json()
    name = data['name']
    
    new_data = {
        "name": name
    }
    _id = mongo.db.classify.insert_one(new_data).inserted_id
    return jsonify({"message": "Success!"})


# SECTION
# get section
@main.route('/api/get_sections/<string:classify_id>', methods=['GET'])
def get_sections(classify_id):
    classify_objId = ObjectId(classify_id)
    sections = mongo.db.section.find({'classify_id': classify_objId})
    sections_list = list(sections)
    return json.loads(json_util.dumps(sections_list))
    

# insert section
@main.route('/api/add_section/<string:classify_name>', methods=["POST"])
def add_section(classify_name):
    
    classify = mongo.db.classify.find_one_or_404({'name': classify_name})
    if classify:
        data = request.get_json()
        name = data['name']
        new_data = {
            'name': name,
            'classify_name': classify_name
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
