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
# get section list
@main.route('/api/get_sections/<string:subject_id>', methods=['GET'])
def get_sections(subject_id):
    objID = ObjectId(subject_id)
    sections = mongo.db.section.find({'subject_id': objID})
    return json.loads(json_util.dumps(list(sections)))

# insert section
@main.route('/api/add_section/<string:subject_id>', methods=["POST"])
def add_section(subject_id):
    objID = ObjectId(subject_id)
    subject = mongo.db.subject.find_one_or_404({'_id': objID})
    if subject:
        data = request.get_json()
        name = data['section_name']
        if name:
            new_data = {
                'name': name,
                'subject_id': objID
            }
            _id = mongo.db.section.insert_one(new_data).inserted_id
            responseData = {
                "_id": _id,
                "name": name,
                "subject_id": objID
            }
            print(responseData)
            return json.loads(json_util.dumps(responseData))
    return make_response(jsonify({'error': 'Bad Request'}), 400) 

# Get a section
@main.route('/api/get_section/<string:section_id>', methods=["GET"])
def get_section(section_id):
    objID = ObjectId(section_id)
    section = mongo.db.section.find_one_or_404({'_id': objID})
    return json.loads(json_util.dumps(section))

# get word
@main.route('/api/get_words/<string:section_id>', methods=['GET'])
def get_words(section_id):
    objId = ObjectId(section_id)
    words = mongo.db.word.find({'section_id': objId})
    return json.loads(json_util.dumps(list(words)))

# insert word
@main.route('/api/add_word', methods=["POST"])
def add_word():
    data = request.get_json()
    section_id = ObjectId(data['section'])
    section = mongo.db.section.find_one_or_404({'_id': section_id})
    if section:
        english = data['english']
        vietnamese = []
        type1 =  data['type1']
        define1 =  data['define1']
        type2 =  data['type2']
        define2 =  data['define2']
        if (english == '') or (type1=='') or (define1==''):
            return jsonify({"message": "bad request"}), 400
        vietnamese.append({'type':type1, 'define':define1})
        if (type2 != '') and (define2 != ''):
            vietnamese.append({ 'type':type2, 'define':define2 })
        new_data = {
            'english': english,
            'vietnamese': vietnamese,
            'section_id': section_id
        }
        _id = mongo.db.word.insert_one(new_data).inserted_id
        return jsonify({"message": "Success!"}), 200
    
# Update word
@main.route('/api/update_word/<string:word_id>', methods=["PATCH"])
def update_word(word_id):
    data = request.get_json()
    _id = ObjectId(word_id)

    english = data['english']
    vietnamese = []
    type1 =  data['type1']
    define1 =  data['define1']
    type2 =  data['type2']
    define2 =  data['define2']
    if (english == '') or (type1=='') or (define1==''):
        return jsonify({"message": "bad request"}), 400
    vietnamese.append({'type':type1, 'define':define1})
    if (type2 != '') and (define2 != ''):
        vietnamese.append({ 'type':type2, 'define':define2 })
  
    collection = mongo.db.word
    query_criteria = {"_id": _id}  # Assuming you're updating based on the document's _id field

    # Specify the update operation
    update_operation = {"$set": {
        'english': english,
        'vietnamese': vietnamese
        }}

    # Perform the update
    collection.update_one(query_criteria, update_operation)
    new_data = collection.find_one({"_id": _id})

    return json.loads(json_util.dumps(new_data))
    
