const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

// Serve static files from the root folder
app.use(express.static(path.join(__dirname)));

// Route for root index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for broneeri folder
app.get('/broneeri', (req, res) => {
    res.sendFile(path.join(__dirname, 'broneeri', 'index.html'));
});

// Root for galerii folder
app.get('/galerii', (req, res) => {
    res.sendFile(path.join(__dirname, 'galerii', 'index.html'));
});

// Root for hinnakiri folder
app.get('/hinnakiri', (req, res) => {
    res.sendFile(path.join(__dirname, 'hinnakiri', 'index.html'));
});

// Root for kontakt folder
app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'kontakt', 'index.html'));
});

// Start the server
app.listen(port);