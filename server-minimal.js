const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>OmniProspect - Lead Generation Platform</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
        h1 { color: #2563eb; }
        .status { background: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <h1>OmniProspect</h1>
      <p>Multi-Platform Lead Generation Platform</p>
      <div class="status">
        <h3>Platform Status: LIVE</h3>
        <p>Advanced search capabilities across multiple platforms</p>
        <p>Compliance monitoring active</p>
      </div>
      <p><a href="/health">Health Check</a></p>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'OmniProspect',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`OmniProspect server running on port ${port}`);
});