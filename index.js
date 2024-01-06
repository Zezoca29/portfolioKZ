const express = require('express');
const path = require('path');

const app = express();
const port = 4000; // Change the port number

// Serve static files in the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Route for the 'index.html' file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
