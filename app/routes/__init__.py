"""
Framework for main module

:author: Matthew Schofield
:version: 3.6.2020
"""
# Library imports
from flask import Blueprint

# Define blueprint
main_blueprint = Blueprint('main', __name__, url_prefix="/")

# Register routes
from app.routes import main_routes
