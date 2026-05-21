const express = require('express');

const app = express();

const port = 3000;

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to Greenfield Community Center!');
});

// Events Route
app.get('/events', (req, res) => {

  const events = [
    'Yoga Class - Monday 7pm',
    'Gardening Workshop - Wednesday 5pm',
    'Book Club - Friday 6pm'
  ];

  res.json(events);

});

// Contact Route
app.get('/contact', (req, res) => {

  res.json({
    email: 'greenfieldcenter@gmail.com',
    phone: '+1-555-123-4567'
  });

});

// Start Server
app.listen(port, () => {

  console.log(`Community Center server running at http://localhost:${port}`);

});