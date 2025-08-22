import os


basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'correct-horse-battery-staple'
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY') or 'incorrect-donkey-charging-store'

    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_ENGINE_OPTIONS = {'pool_recycle' : 280}
    
    MAX_CONTENT_LENGTH = 10 * 1000 * 1000
    UPLOAD_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp']
    THUMB_SIZE = (500,500)

    POSTS_PER_PAGE = 16

    SESSION_COOKIE_SAMESITE = "strict"
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    REMEMBER_COOKIE_SAMESITE = "strict"
    REMEMBER_COOKIE_SECURE = True

    FORMS_CSRF = True

    CORS_HEADERS = ['Content-Type','Authorization']

    MONGO_URI = os.environ.get("MONGO_URI")


class DevConfig(Config):
    SESSION_COOKIE_SAMESITE = None
    SESSION_COOKIE_SECURE = False
    SESSION_COOKIE_HTTPONLY = False
    REMEMBER_COOKIE_SAMESITE = None
    REMEMBER_COOKIE_SECURE = False

    FORMS_CSRF = False
