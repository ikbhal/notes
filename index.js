const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3005;

// Serve static files from the "static" folder
app.use(express.static(path.join(__dirname, 'static')));

// Set up the default route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
