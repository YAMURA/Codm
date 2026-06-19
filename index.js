const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    status: 'success', 
    message: 'CODM Project is running!',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`📡 Health check: /health`);
});
