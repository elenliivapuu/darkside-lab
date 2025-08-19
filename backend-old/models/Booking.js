const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    startDate:  { type: Date,   required: true},
    name:       { type: String, required: true },
    email:      { type: String, required: true },
    phone:      { type: String, required: true },
    comment:    { type: String, required: false },
    createdAt:  { type: Date,   default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;