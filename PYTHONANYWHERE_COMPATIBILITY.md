# PythonAnywhere Compatibility Guide for OmniProspect

## Technology Stack Analysis

**OmniProspect Current Stack:**
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tools**: Vite, esbuild, TypeScript compiler

**PythonAnywhere Support:**
- ✅ **Static Files**: Can host React frontend
- ❌ **Node.js**: Not natively supported (Python-focused platform)
- ❌ **Express.js**: Requires Node.js runtime
- ✅ **PostgreSQL**: Available through external providers

## Compatibility Assessment

### Current Limitations on PythonAnywhere:
1. **No Node.js Runtime** - PythonAnywhere is designed for Python applications
2. **No npm/Node Package Management** - Cannot install Node.js dependencies
3. **No TypeScript Compilation** - Requires Node.js toolchain
4. **No Express.js Server** - Backend framework not supported

### Possible Solutions:

#### Option 1: Hybrid Deployment (Recommended)
- **Frontend**: Deploy static React build to PythonAnywhere
- **Backend**: Deploy Node.js backend to another platform
- **Database**: External PostgreSQL (Neon, Supabase)

#### Option 2: Complete Python Rewrite
- **Frontend**: Keep React (served as static files)
- **Backend**: Rewrite in Python (Flask/FastAPI)
- **Database**: PostgreSQL with SQLAlchemy

#### Option 3: Alternative Python-Friendly Platforms
- **Railway**: Supports both Python and Node.js
- **Render**: Multi-language support
- **Heroku**: Both Python and Node.js

## Option 1: Hybrid Deployment Setup

### Step 1: Build Static Frontend
```bash
# Build React app for static hosting
npm run build
# Creates dist/public folder with static files
```

### Step 2: Deploy Frontend to PythonAnywhere
1. Upload `dist/public` contents to `/home/yourusername/mysite/static/`
2. Configure static file serving in PythonAnywhere dashboard
3. Set up domain routing

### Step 3: Deploy Backend Elsewhere
- Use Vercel, Railway, or Render for Node.js backend
- Update frontend API calls to point to external backend

### Environment Configuration:
```javascript
// In React app
const API_BASE_URL = 'https://your-backend.vercel.app';
```

## Option 2: Python Backend Rewrite

### Required Changes:
1. **Rewrite Express.js routes in Flask/FastAPI**
2. **Replace Drizzle ORM with SQLAlchemy**
3. **Convert TypeScript types to Python models**
4. **Recreate search API integrations**

### Estimated Effort:
- **Time**: 2-3 weeks full-time development
- **Complexity**: High - complete backend rewrite
- **Risk**: High - testing and debugging required

### Python Stack Equivalent:
```python
# Flask backend example
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://...'
db = SQLAlchemy(app)

@app.route('/api/search', methods=['POST'])
def search():
    query = request.json['query']
    # Google Custom Search implementation
    return jsonify(results)
```

## Recommended Approach

### Best Solution: Multi-Platform Deployment

**Why not PythonAnywhere for OmniProspect:**
1. **Technology Mismatch** - Built for Node.js, not Python
2. **Complex Migration** - Would require complete rewrite
3. **Lost Features** - Advanced TypeScript features, npm ecosystem
4. **Time Investment** - Weeks of redevelopment

**Better Alternatives:**

#### Railway (Recommended)
- **Cost**: $5/month including database
- **Support**: Full Node.js + PostgreSQL
- **Migration**: Zero code changes needed
- **Time**: 10 minutes deployment

#### Vercel + Neon Database
- **Cost**: Free tier available
- **Support**: Perfect for React + Node.js
- **Migration**: Zero code changes needed
- **Performance**: Global CDN included

#### Render
- **Cost**: Free tier available
- **Support**: Full-stack Node.js applications
- **Migration**: Zero code changes needed
- **Database**: PostgreSQL included

## If You Must Use PythonAnywhere

### Minimal Frontend-Only Deployment:

1. **Build Static Version:**
```bash
npm run build
cd dist/public
# Upload these files to PythonAnywhere
```

2. **Create Simple Python Proxy:**
```python
# main.py - Basic proxy to external API
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api/<path:path>', methods=['GET', 'POST'])
def proxy(path):
    # Proxy to external Node.js backend
    backend_url = f'https://your-backend.vercel.app/api/{path}'
    resp = requests.request(
        method=request.method,
        url=backend_url,
        headers={k:v for k,v in request.headers if k != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        allow_redirects=False
    )
    return resp.content, resp.status_code
```

3. **Static File Configuration:**
- Serve React build files as static content
- Configure URL routing for single-page application

## Cost Comparison

### PythonAnywhere (Frontend Only + External Backend):
- **PythonAnywhere**: $5/month (basic plan)
- **External Backend**: $5-20/month (Vercel/Railway)
- **Database**: $0-25/month (Neon/Supabase)
- **Total**: $10-50/month

### Direct Node.js Hosting:
- **Railway**: $5/month (everything included)
- **Vercel + Neon**: $0-20/month
- **Render**: $0-25/month

## Conclusion

**Recommendation: Use Railway or Vercel instead of PythonAnywhere**

**Reasons:**
1. **Zero Code Changes** - Deploy existing codebase immediately
2. **Lower Cost** - $5/month vs $10-50/month hybrid setup
3. **Better Performance** - Native Node.js runtime
4. **Easier Maintenance** - Single platform deployment
5. **Full Feature Support** - All OmniProspect features work

**If you already have PythonAnywhere and prefer to use it:**
- Deploy only the frontend static files
- Use external service for backend (Vercel Functions, Railway)
- This adds complexity but is technically possible

Would you like me to help you set up deployment on Railway or Vercel instead? It would be much simpler and more cost-effective than trying to adapt OmniProspect for PythonAnywhere.