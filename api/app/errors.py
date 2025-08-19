from app import app, db


@app.errorhandler(404)
def page_not_found(e):
    return 'Not Found', 404

@app.errorhandler(500)
def internal_server_error(e):
    db.session.rollback()
    return 'Server Error', 500