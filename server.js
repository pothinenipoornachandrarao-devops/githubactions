const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Exported logic for testing
function calculateHealth(status = 'UP') {
  return {
    status: status,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  };
}

app.get('/', (req, res) => {
  res.json({ message: 'Production app running successfully on Azure VM!' });
});

app.get('/health', (req, res) => {
  res.status(200).json(calculateHealth());
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = { app, calculateHealth };