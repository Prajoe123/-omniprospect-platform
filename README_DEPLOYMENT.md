# 🚀 OmniProspect Deployment Guide

Deploy your OmniProspect application to production in minutes with continuous updates.

## Quick Start Options

### Option 1: One-Click Deployment

| Platform | Deploy Button | Free Tier | Database Included | Best For |
|----------|---------------|-----------|------------------|----------|
| **Vercel** | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new) | Yes (100GB) | No* | Serverless, Global CDN |
| **Railway** | [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new) | $5/month | Yes | Full-stack, Databases |
| **Render** | [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy) | Yes (750hrs) | Yes | Traditional hosting |
| **Netlify** | [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy) | Yes (100GB) | No* | JAMstack, Frontend |

*Requires external database (Neon, Supabase, PlanetScale)

### Option 2: Docker Deployment

```bash
# Clone and deploy with Docker
git clone https://github.com/yourusername/omniprospect.git
cd omniprospect
cp .env.example .env
# Edit .env with your values
docker-compose up -d
```

## Prerequisites

### 1. Database Setup
Choose one of these managed PostgreSQL providers:

**Recommended: Neon (Serverless)**
- Sign up at [neon.tech](https://neon.tech)
- Create database, copy connection string
- Free tier: 0.5GB storage, 3GB transfer

**Alternative: Supabase**
- Sign up at [supabase.com](https://supabase.com)
- Create project, get PostgreSQL connection string
- Free tier: 0.5GB database, 50MB file storage

### 2. Search API Keys
Get at least one API key for search functionality:

**Google Custom Search (Recommended)**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Custom Search API
3. Create credentials → API Key
4. Set up Custom Search Engine at [cse.google.com](https://cse.google.com/)

**Bing Web Search**
1. Sign up at [Azure Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/)
2. Create Bing Search resource
3. Copy API key from resource dashboard

## Step-by-Step Deployment

### Deploy to Vercel (Recommended)

1. **Fork Repository**
   ```bash
   # Fork the repository on GitHub
   # Clone your fork locally
   git clone https://github.com/YOUR_USERNAME/omniprospect.git
   ```

2. **Set Up Database**
   - Create Neon database
   - Copy DATABASE_URL

3. **Deploy to Vercel**
   - Connect GitHub repository to Vercel
   - Add environment variables:
     ```
     DATABASE_URL=postgresql://...
     GOOGLE_SEARCH_API_KEY=your_key
     GOOGLE_SEARCH_ENGINE_ID=your_id
     NODE_ENV=production
     ```
   - Deploy!

4. **Initialize Database**
   ```bash
   # In Vercel Functions section, run:
   npm run db:push
   ```

### Deploy to Railway

1. **Connect Repository**
   - Sign up at Railway
   - Connect your GitHub repository
   - Railway auto-detects `railway.json`

2. **Add Environment Variables**
   - DATABASE_URL (auto-provided by Railway PostgreSQL)
   - GOOGLE_SEARCH_API_KEY
   - GOOGLE_SEARCH_ENGINE_ID
   - NODE_ENV=production

3. **Deploy**
   - Railway automatically builds and deploys
   - Database migrations run automatically

### Deploy to Render

1. **Create Web Service**
   - Connect GitHub repository
   - Render detects `render.yaml`

2. **Create Database**
   - Add PostgreSQL service
   - Connection string auto-generated

3. **Environment Variables**
   - Add all required variables
   - DATABASE_URL connected to PostgreSQL service

4. **Deploy**
   - Automatic deployment on git push
   - Health checks at `/health`

## Continuous Deployment

### Automatic Updates

The included GitHub Actions workflow provides:
- **Testing**: Runs on every pull request
- **Building**: Creates production builds
- **Deployment**: Auto-deploys on branch push

**Branch Strategy:**
- `main` → Staging environment
- `production` → Production environment

### Manual Deployment

```bash
# Deploy to staging
git push origin main

# Deploy to production
git checkout production
git merge main
git push origin production
```

### Rolling Updates

All platforms support zero-downtime deployments:
- Vercel: Automatic with preview deployments
- Railway: Built-in with health checks
- Render: Blue-green deployments
- Netlify: Atomic deployments

## Environment Configuration

### Required Variables

```env
# Database
DATABASE_URL=postgresql://...

# Search APIs (at least one)
GOOGLE_SEARCH_API_KEY=your_key
GOOGLE_SEARCH_ENGINE_ID=your_id
BING_SEARCH_API_KEY=your_key

# Application
NODE_ENV=production
```

### Security Variables

```env
SESSION_SECRET=random_secure_string
CORS_ORIGIN=https://yourdomain.com
```

### Optional Enhancements

```env
# Monitoring
SENTRY_DSN=your_sentry_dsn

# Rate Limiting
LINKEDIN_DAILY_LIMIT=100
GOOGLE_DAILY_LIMIT=100
```

## Domain & SSL

### Custom Domain Setup

**Vercel:**
```bash
# Add custom domain in Vercel dashboard
# DNS automatically configured
```

**Railway:**
```bash
# Custom domains in Railway settings
# CNAME to railway.app domain
```

**Render:**
```bash
# Custom domains in service settings
# SSL certificates auto-generated
```

### SSL Certificates
All platforms provide free SSL certificates automatically:
- Let's Encrypt integration
- Auto-renewal
- HTTP to HTTPS redirects

## Monitoring & Maintenance

### Health Monitoring
- Endpoint: `GET /health`
- Returns system status and metrics
- Used by load balancers

### Application Metrics
- Database connection status
- API response times
- Search success rates
- Rate limit usage

### Log Management
- Structured JSON logging
- Request/response tracking
- Error reporting with stack traces

## Performance Optimization

### CDN Configuration
- Static assets cached globally
- API responses cached appropriately
- Database query optimization

### Scaling Strategy
- Horizontal scaling supported
- Database connection pooling
- Rate limiting per user

## Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Check Node.js version (18+)
node --version

# Clear dependencies
rm -rf node_modules package-lock.json
npm install
```

**Database Errors:**
```bash
# Test connection
npm run db:studio

# Push schema
npm run db:push
```

**API Issues:**
```bash
# Check environment variables
echo $DATABASE_URL
echo $GOOGLE_SEARCH_API_KEY

# Test health endpoint
curl https://yourapp.com/health
```

### Getting Help
- Check deployment logs in platform dashboard
- Review [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed guides
- Open GitHub issue for bugs

## Cost Estimates

### Free Tier Combinations
- **Vercel + Neon**: $0/month (hobby projects)
- **Netlify + Supabase**: $0/month (light usage)
- **Railway Starter**: $5/month (includes database)

### Production Scale
- **Vercel Pro + Neon Pro**: ~$50/month
- **Railway Pro**: ~$20/month
- **Render Premium**: ~$25/month

## Migration & Backup

### Database Backup
```bash
# Automated backups (all platforms)
# Point-in-time recovery available
# Cross-region replication recommended for production
```

### Application Backup
- Git repository as source of truth
- Docker images in container registry
- Environment variables in secure storage

---

**Ready to deploy?** Choose your platform and follow the guide above. Most deployments complete in under 5 minutes!