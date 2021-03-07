"""
Initialize Flask application architecture

:authors: Matthew Schofield
:version: 12.11.2020
"""
# Library imports
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask_cors import CORS
import configparser

# Init app
app = Flask(__name__)

#Cors setup to allow requests from frontend
CORS(app)

# Set file size
app.config['MAX_CONTENT_LENGTH'] = 4 * 1024 * 1024

'''
DATABASE SET-UP
'''

'''
Load Blueprints to define endpoints
'''
# Blueprint imports
from app.routes.main_routes import main_blueprint

# Load in modules "Blueprints"
app.register_blueprint(main_blueprint)

# Show URLs
print(app.url_map)
