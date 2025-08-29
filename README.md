# Darkside-Lab — Car Detailing Booking Website
A responsive full-stack web application for a professional car detailing company in Estonia. The site allows users to browse services, view photos, contact the business, and book an appointment through a calendar-based form.

---

## 🔧 Stack

**Frontend**: Vue 3, Vite, HTML5, CSS  
**Backend**: Flask (Python), Flask-Login  

---

## 🗂️Structure:
- The **frontend** lives in the `src/` directory.
- The **Flask backend** is in the `api/` folder.

---

## 📁 Features

- 🧼 **Service Overview** – Information about car handwashing and related services
- 📸 **Image Gallery** – Image gallery
- 📆 **Booking Calendar** – Select date/time, enter contact info, submit booking
- 🔐 **Admin Panel** – View and delete bookings, login/logout
- 📍 **Contact Page** – Integrated Google Maps + email form via Formspree

---

## Installing

Install packages with `npm install`.

## Backend

`cd api`

`python3 -m venv venv`

`source venv/bin/activate` 

`pip install -r requirements.txt` 

`python -m flask db upgrade` 

## Running

Run the Vue.js frontend:
`npm run dev`

Start the Flask server:
`npm run server`

---

## Login, register and Admin views

To access Admin page and manage bookings navigate to `/admin`, probably have to `/login` first or create admin account under `/register`


## 📨 Contact Form

To enable the contact form:

Sign up at https://formspree.io

Replace the default form URL in ContactView.vue with your own Formspree endpoint.

## Notes:

You can change the base API URL in the `.env` file.  
Booked times are stored in a `bookedHours` variable in `BookView.vue`—you can update it as needed.