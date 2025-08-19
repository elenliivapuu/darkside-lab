const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Booking = require('./models/Booking');
const app = express();
const PORT = process.env.port || 3000;

require('dotenv').config({path: __dirname + '/.env'})


// Serve static files from the root folder
app.use(express.static(path.join(__dirname, 'dist')));

// Body parser
app.use(express.json());


// ???
mongoose.connect('mongodb://127.0.0.1:27017/darkside') 
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



app.get('/api/bookings', async (req, res) => {
    try {
      const bookings = await Booking.find();

      // TODO check if we are logged in as admin, NB! implement proper authentication later
      if (req.isAuthenticated()) {
        res.json(bookings);
        return;
      }

      // Not admin -- return only dates
      const filteredBookings = bookings.map(item => ({ startDate: item.startDate }));
      res.json(filteredBookings);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching bookings' });
    }
  });

app.post('/api/bookings', async (req, res) => {
  console.log("Received new request with body: ", req.body);
  const { name, phone, email, startDate, time } = req.body;

  if (!name || !phone || !email || !startDate || !time) {
      return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const booking = new Booking({
        name,
        phone,
        email,
        startDate: new Date(startDate)
    });

    // check if entry with same date and time already exists!
    const conflictBooking = await Booking.findOne({ 'startDate': booking.startDate });
    if (conflictBooking != null) {
      console.error("Conflicting booking: ", conflictBooking);
      console.log("Returning 409 and exiting...");
      res.status(409).json({ error: 'A booking with this date already exists!' }).end();
    } else {
      // Save to database
      await booking.save();
      res.status(201).json({ message: 'Booking saved successfully', booking: { startDate: booking.startDate } });
    }

} catch (error) {
    res.status(500).json({ error: 'Failed to save booking' });
}

});

app.delete('/api/bookings', async (req, res) => {
  const { bookingId } = req.body;

  try {
    // There is no secure authentication implemented, so admin can access this endpoint only when using this admin key below for now
    // TODO check if we are logged in as admin
    if (req.isAuthenticated()) {
      const result = await Booking.findByIdAndDelete(bookingId);
      res.status(200).json({ message: 'Booking deleted successfully', booking: result });
      return;
    }
    
    res.status(401).json({ message: 'You must be logged in as an admin to access this endpoint' });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});