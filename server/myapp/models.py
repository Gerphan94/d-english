from flask_mongoengine import MongoEngine

db = MongoEngine()

class Users(db.Document):
    username = db.StringField(required=True, unique=True)
    fullname = db.StringField(required=True, unique=True)