const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Booking = require('./models/Booking');
const app = express();
const PORT = process.env.port || 3000;

// Serve static files from the root folder
app.use(express.static(path.join(__dirname, 'dist')));

mongoose.connect('mongodb://127.0.0.1:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



app.get('/api/bookings', async (req, res) => {
    try {
      const bookings = await Booking.find();

      // TODO mongoose filter VS filter here

      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching bookings' });
    }
  });


app.get('/api/hello', async (req, res) => {
    res.send('hello :-) im bepis inside server ...trapped with penguins')
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});