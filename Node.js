// Import the necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route to handle a POST request
app.post('/data', (req, res) => {
  const receivedData = req.body;
  res.send(`Received data: ${JSON.stringify(receivedData)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
