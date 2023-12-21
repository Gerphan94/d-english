from flask import Flask
from flask_cors import CORS

# from .routes import main
from .routes import mongo, main
import os
def create_app():
    app = Flask(__name__)
  
    # app.config['MONGODB_SETTINGS'] = {
    #     'db': os.environ['DATABASE_NAME'],
    #     'host': os.environ['MONGODB_URI'],
    # }
    
    app.secret_key = "cwFXy5ALzg"
    app.config["MONGO_URI"] = os.environ['MONGODB_URI']
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    
    mongo.init_app(app)
    app.register_blueprint(main)

    return app
