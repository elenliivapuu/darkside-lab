from flask import Flask
from config import Config, DevConfig
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask import request
import logging
from logging.handlers import RotatingFileHandler
import os

from flask_cors import CORS

# Flask app
app = Flask(__name__)

env = os.environ.get("FLASK_ENV")

if env == "development":
    app.config.from_object(DevConfig)
    CORS(app, supports_credentials=True, origins=["http://localhost:5173","http://127.0.0.1:5173"], max_age=360000)
    print('[!] Starting development server with CORS and lax session cookies')
else:
    app.config.from_object(Config)

# DB and alembic
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Login and sessions
login = LoginManager(app)
login.login_view = '/login' # /login endpoint
login.login_message = 'Please log in to access this page.'

# Logging
stream_handler = logging.StreamHandler()
stream_handler.setLevel(logging.INFO)
app.logger.addHandler(stream_handler)


from app import routes, models, errors