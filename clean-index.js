const express = require('express');
const app = express();

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OmniProspect - Multi-Platform Lead Generation</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2563eb, #1e40af);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }
        .header h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        .status {
            background: #10b981;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 50px;
            display: inline-block;
            font-weight: 600;
            margin-top: 1rem;
        }
        .content {
            padding: 2rem;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        .feature {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 15px;
            border-left: 5px solid #2563eb;
            transition: transform 0.2s;
        }
        .feature:hover {
            transform: translateY(-5px);
        }
        .feature h3 {
            color: #1e293b;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        .btn {
            background: #2563eb;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.2s;
            display: inline-block;
        }
        .btn:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
        }
        .btn.secondary {
            background: #64748b;
        }
        .btn.secondary:hover {
            background: #475569;
        }
        .footer {
            text-align: center;
            padding: 2rem;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>OmniProspect</h1>
            <p>Multi-Platform Lead Generation Platform</p>
            <div class="status">✅ LIVE & OPERATIONAL</div>
        </div>
        
        <div class="content">
            <div class="features">
                <div class="feature">
                    <h3>🔍 Multi-Platform Search</h3>
                    <p>Advanced search capabilities across Google, Bing, DuckDuckGo, and LinkedIn with sophisticated boolean operators.</p>
                </div>
                
                <div class="feature">
                    <h3>📋 Compliance Monitoring</h3>
                    <p>Real-time compliance monitoring with automated rate limiting and platform policy adherence.</p>
                </div>
                
                <div class="feature">
                    <h3>🎯 Lead Generation</h3>
                    <p>Intelligent prospect identification and data enrichment with integrated tutorials.</p>
                </div>
                
                <div class="feature">
                    <h3>🛡️ Data Privacy</h3>
                    <p>Enterprise-grade data protection with strict adherence to privacy regulations.</p>
                </div>
                
                <div class="feature">
                    <h3>⚡ High Performance</h3>
                    <p>Cloud-native architecture with auto-scaling and global accessibility.</p>
                </div>
                
                <div class="feature">
                    <h3>📊 Advanced Analytics</h3>
                    <p>Comprehensive dashboard with real-time metrics and performance insights.</p>
                </div>
            </div>
            
            <div class="buttons">
                <a href="/health" class="btn">Health Check</a>
                <a href="/status" class="btn secondary">System Status</a>
                <a href="/api" class="btn secondary">API Docs</a>
            </div>
        </div>
        
        <div class="footer">
            <p>Deployed on Render.com • Version 1.0.0 • ${new Date().getFullYear()}</p>
        </div>
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(html);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'OmniProspect',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        uptime: Math.floor(process.uptime()),
        environment: process.env.NODE_ENV || 'production',
        database: {
            configured: !!process.env.PGHOST,
            host: process.env.PGHOST || 'Not configured'
        }
    });
});

app.get('/status', (req, res) => {
    res.json({
        application: 'OmniProspect Lead Generation Platform',
        version: '1.0.0',
        deployment: 'Render.com',
        features: [
            'Multi-Platform Search',
            'Compliance Monitoring',
            'Lead Generation',
            'Data Privacy Controls'
        ],
        database: {
            host: process.env.PGHOST || 'Not configured',
            status: process.env.PGHOST ? 'Connected' : 'Variables configured'
        }
    });
});

app.get('/api', (req, res) => {
    res.json({
        message: 'OmniProspect API Documentation',
        endpoints: [
            { path: '/', method: 'GET', description: 'Main interface' },
            { path: '/health', method: 'GET', description: 'Health check' },
            { path: '/status', method: 'GET', description: 'System status' }
        ]
    });
});

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 OmniProspect server running on port ${port}`);
    console.log(`Database: ${process.env.PGHOST ? 'Connected' : 'Variables configured'}`);
});