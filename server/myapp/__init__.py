from flask import Flask
import os
from .models import db
from .routes import main

def create_app():
    app = Flask(__name__)
    print("DATABASE_NAME:", os.environ.get('DATABASE_NAME'))
    print("MONGODB_URI:", os.environ.get('MONGODB_URI'))
    
    app.config['MONGODB_SETTINGS'] = {
        'db': os.environ['DATABASE_NAME'],
        'host': os.environ['MONGODB_URI'],
    }
    
    db.init_app(app)
    app.register_blueprint(main)

    return app
