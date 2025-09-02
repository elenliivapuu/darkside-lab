
# Darkside-Lab — Car Detailing Booking Website
A responsive full-stack web application for a professional car detailing company in Estonia. The site allows users to browse services, view photos, contact the business, and book an appointment through a calendar-based form.

---

## 🔧 Stack

**Frontend**: Vue 3, Vite, HTML5, CSS  
**Backend**: Flask (Python), Flask-Login  

---

## 🗂️Structure:
- The **frontend** is in the `src/` directory.
- The **Flask backend** is in the `api/` folder.
- Configurable values (`baseUrl`, `bookingHourSlots`) are in `/src/config.js`

---

## 📁 Features

- 🧼 **Service Overview** – Information about car handwashing and related services
- 📸 **Image Gallery** – Image gallery
- 📆 **Booking Calendar** – Select date/time, enter contact info, submit booking
- 🔐 **Admin Panel** – View and delete bookings, login/logout
- 📍 **Contact Page** – Integrated Google Maps + email form via Formspree

---

## Installing

Install packages with `npm install`

## Backend

```bash
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python -m flask db upgrade
```

## Running

Run the Vue.js frontend:
`npm run dev`

Start the Flask server:
`npm run server`

---

## Login, register and Admin views
 
1. Create an admin account at `/register`
2. Log in at `/login` using your admin account
3. Navigate to `/admin` to manage bookings


##  Contact Form

To enable the contact form:

1. Sign up at https://formspree.io
2. Replace the default form URL in ContactView.vue with your own Formspree endpoint.


## Updating the Image Gallery

To add more images to Gallery: 

1. Open `/src/views/GalleryView.vue`
2. Add your images to the `main-grid` section


## Configuration Notes:

You can change the base API URL in the `.env` file.
Change `baseUrl` variable in `config.js` to your real URL.

To edit available booking times `bookingHourSlots` in `/src/config.js` file, update with the time slots you want to offer for booking.


Create a .env file inside /api with the following contents:
```bash
FLASK_APP=start.py
FLASK_ENV=development
```

Add secret keys there, if needed. The file is not tracked by git. Change `FLASK_ENV` to `production` when deploying to server.
