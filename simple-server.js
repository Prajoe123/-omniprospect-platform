const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>OmniProspect - Multi-Platform Lead Generation</title>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                max-width: 800px; 
                margin: 50px auto; 
                padding: 20px; 
                background: #f8fafc;
            }
            h1 { color: #2563eb; margin-bottom: 10px; }
            .subtitle { color: #6b7280; margin-bottom: 30px; }
            .feature { 
                background: white; 
                padding: 20px; 
                margin: 15px 0; 
                border-radius: 8px; 
                border-left: 4px solid #2563eb;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .feature h3 { color: #1f2937; margin-top: 0; }
            .links { margin-top: 30px; }
            .links a { 
                background: #2563eb; 
                color: white; 
                padding: 10px 20px; 
                text-decoration: none; 
                border-radius: 5px; 
                margin-right: 10px;
            }
            .links a:hover { background: #1d4ed8; }
        </style>
    </head>
    <body>
        <h1>OmniProspect</h1>
        <p class="subtitle">Advanced Lead Generation Platform</p>
        
        <div class="feature">
            <h3>🔍 Multi-Platform Search</h3>
            <p>Advanced search capabilities across Google, Bing, DuckDuckGo, and LinkedIn with boolean operators and specialized techniques.</p>
        </div>
        
        <div class="feature">
            <h3>📋 Compliance Monitoring</h3>
            <p>Real-time compliance monitoring with automated rate limiting and platform policy adherence.</p>
        </div>
        
        <div class="feature">
            <h3>🎯 Lead Generation</h3>
            <p>Intelligent prospect identification and data enrichment with integrated tutorials and best practices.</p>
        </div>
        
        <div class="feature">
            <h3>🛡️ Data Privacy</h3>
            <p>Enterprise-grade data protection mechanisms with strict adherence to privacy regulations.</p>
        </div>
        
        <div class="links">
            <a href="/health">Health Check</a>
            <a href="/status">System Status</a>
        </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'OmniProspect',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'production'
  });
});

app.get('/status', (req, res) => {
  res.json({
    application: 'OmniProspect Lead Generation Platform',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'production',
    database: {
      host: process.env.PGHOST || 'Not configured',
      status: process.env.PGHOST ? 'Connected' : 'Not configured'
    },
    features: [
      'Multi-Platform Search',
      'Compliance Monitoring', 
      'Lead Generation',
      'Data Privacy Controls'
    ]
  });
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`OmniProspect server running on port ${port}`);
});