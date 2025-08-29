# Darkside-Lab — Car Detailing Booking Website
A responsive full-stack web application for a professional car detailing company in Estonia. The site allows users to browse services, view photos, contact the business, and book an appointment through a calendar-based form.

---

## 🔧 Stack

**Frontend**: Vue 3, Vite, HTML5, CSS  
**Backend**: Flask (Python), Flask-Login  

---

## In this project:
- The **frontend** lives in the `src/` directory.
- The **Flask backend** is in the `api/` folder.

---

## 📁 Features

- 🧼 **Service Overview** – Information about car handwashing and related services
- 📸 **Image Gallery** – Embedded Swiper-based image showcase
- 📆 **Booking Calendar** – Select date/time, enter contact info, submit booking
- 🔐 **Admin Panel** – View and delete bookings, log out securely
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

Start the Node.js server:
`npm run server`

## Login, register and Admin views

To access the unfinished admin page, navigate to `/admin`, probably have to `/login` first or create admin account under `/register`
