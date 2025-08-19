from flask import redirect, url_for, request, make_response
from flask_login import current_user, login_user, logout_user, login_required
from urllib.parse import urlsplit
from app import app, login, db
from app.forms import LoginForm, RegistrationForm, CreateBookingForm
from flask import make_response
from app.models import User, Booking
import sqlalchemy as sa
from datetime import datetime


@login.unauthorized_handler
def unauthorized():
    return make_response({'msg': 'You must be logged in to complete this action!'}, 400)


@app.route('/api/bookings/dates', methods=['GET'])
def bookings_dates():
    items = db.session.execute(db.select(Booking).order_by(Booking.id.asc())).fetchall()
    items = [e[0].to_dict() for e in items]
    filtered = [e['startDate'].strftime('%Y-%m-%dT%H:%M:%SZ') for e in items]
    return make_response({'bookings': filtered}, 200)

# TODO future consideration: GET list of booked hours for given datetime stamp
# select Booking where datetime == given datetime, return hour values.
# SQL perfect for this, but might be costly if user spams a lot

@app.route('/api/bookings', methods=['GET'])
@login_required
def bookings():
    items = db.session.execute(db.select(Booking).order_by(Booking.id.desc())).fetchall()
    items = [e[0].to_dict() for e in items]
    return make_response({'bookings': items}, 200)

@app.route('/api/bookings/<_id>', methods=['DELETE'])
@login_required
def bookings_delete(_id):
    app.logger.info('Deleting booking #%s', str(_id))
    obj = db.one_or_404(db.select(Booking).filter_by(id=_id))
    db.session.delete(obj)
    db.session.commit()

    return make_response({'redirect': '/admin'}, 200)

@app.route('/api/bookings', methods=['POST'])
def bookings_post():
    form = CreateBookingForm(meta={'csrf': app.config['FORMS_CSRF']})
    if form.cancel.data:
        return make_response({'redirect': '/'}, 200)

    if form.validate_on_submit():
        psd = datetime.strptime(form.startDate.data, "%Y-%m-%dT%H:%M:%S.%fZ")
        booking = Booking(name=form.name.data,
                    email=form.email.data,
                    phone=form.phone.data,
                    startDate=psd,
                    )

        db.session.add(booking)
        db.session.commit()

        return make_response({'redirect': '/'}, 200)

    return make_response({'msg': 'Server Error', 'errors': form.errors}, 500)


@app.route('/api/login', methods=['POST'])
def login():
    if current_user.is_authenticated:
        return make_response({'redirect': '/admin'}, 200)

    form = LoginForm(meta={'csrf': app.config['FORMS_CSRF']})
    if form.validate_on_submit():
        # Check if user exists ??
        user = db.session.scalar(sa.select(User).where(User.username == form.username.data))

        if user is None or not user.check_password(form.password.data): # verify password
            print(f'user {user} bad')
            return make_response({'msg': 'Incorrect username or password!'}, 401)


        app.logger.info('Logging in user %s', user.username)
        login_user(user, remember=form.remember_me.data == 'true')

        return make_response({'redirect': '/admin'}, 200)

    return make_response({'msg': 'OK', 'errors': form.errors}, 200)

@app.route('/api/check')
def check_auth():
    return make_response({"authenticated": current_user.is_authenticated}, 200)

@app.route('/api/logout')
@login_required
def logout():
    logout_user()
    return make_response({'redirect': '/', 'msg': 'You have been logged out'}, 200)

# disable this endpoint when not in use
@app.route('/api/register', methods=['POST'])
def register():
    if current_user.is_authenticated:
        return make_response({'redirect': '/'}, 200)

    form = RegistrationForm(meta={'csrf': app.config['FORMS_CSRF']})
    print(form.username.data, form.password.data)
    if form.validate_on_submit():
        user = User(username=form.username.data,
                    email=form.email.data)

        if form.password.data == form.password2.data:
            user.set_password(form.password.data)

        app.logger.info('[!] New user registration: %s - %s', user.username, user.email)

        db.session.add(user)
        db.session.commit()
        return make_response({'redirect': '/login'}, 200)
    
    return make_response({'msg': 'Server Error', 'errors': form.errors}, 500)
