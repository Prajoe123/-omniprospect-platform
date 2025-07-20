# OmniProspect Cloud Deployment Guide

This guide covers deploying OmniProspect to various third-party cloud services with continuous deployment capabilities.

## Table of Contents
1. [Quick Deploy Options](#quick-deploy-options)
2. [Environment Variables](#environment-variables)
3. [Platform-Specific Guides](#platform-specific-guides)
4. [Continuous Deployment](#continuous-deployment)
5. [Database Setup](#database-setup)
6. [Monitoring & Maintenance](#monitoring--maintenance)

## Quick Deploy Options

### 🚀 One-Click Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/omniprospect)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/omniprospect)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/yourusername/omniprospect)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/yourusername/omniprospect)

## Environment Variables

### Required Variables
```env
# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Search APIs (at least one required)
GOOGLE_SEARCH_API_KEY=your_google_api_key
GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id
BING_SEARCH_API_KEY=your_bing_api_key
SERP_API_KEY=your_serp_api_key

# Application
NODE_ENV=production
```

### Optional Variables
```env
# Rate Limiting
LINKEDIN_DAILY_LIMIT=100
GOOGLE_DAILY_LIMIT=100
BING_DAILY_LIMIT=1000

# Security
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret

# Monitoring
SENTRY_DSN=your_sentry_dsn
```

## Platform-Specific Guides

### 1. Vercel Deployment

**Prerequisites:**
- Neon Database account (free tier available)
- Google Custom Search API key
- GitHub repository

**Steps:**
1. Fork this repository to your GitHub account
2. Create a Neon database at [neon.tech](https://neon.tech)
3. Get your Google Custom Search API credentials
4. Click "Deploy to Vercel" button above
5. Configure environment variables in Vercel dashboard
6. Deploy!

**Pros:** Serverless, automatic HTTPS, global CDN
**Cons:** Function timeout limits, cold starts

### 2. Railway Deployment

**Steps:**
1. Connect your GitHub repository to Railway
2. Railway will automatically detect the `railway.json` config
3. Add environment variables in Railway dashboard
4. Deploy automatically triggers

**Pros:** Simple setup, built-in PostgreSQL, excellent developer experience
**Cons:** Limited free tier

### 3. Render Deployment

**Steps:**
1. Connect GitHub repository to Render
2. Render detects `render.yaml` configuration
3. Set up PostgreSQL database (included)
4. Configure environment variables
5. Deploy

**Pros:** Generous free tier, includes database, simple pricing
**Cons:** Slower cold starts on free tier

### 4. Netlify Deployment

**Note:** Best for frontend-only deployment with external API

**Steps:**
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `client/dist`
4. Configure redirects for API routes
5. Deploy

### 5. Self-Hosted with Docker

**Quick Start:**
```bash
# Clone repository
git clone https://github.com/yourusername/omniprospect.git
cd omniprospect

# Copy environment file
cp .env.example .env
# Edit .env with your values

# Deploy with Docker Compose
docker-compose up -d
```

**Production Setup:**
```bash
# Use production docker-compose
docker-compose -f docker-compose.prod.yml up -d

# With SSL proxy (recommended)
docker-compose -f docker-compose.prod.yml -f docker-compose.ssl.yml up -d
```

## Continuous Deployment

### GitHub Actions Workflow

The included `.github/workflows/deploy.yml` provides:
- **Automated Testing:** Runs tests on every pull request
- **Build Validation:** Ensures the application builds successfully
- **Container Registry:** Pushes Docker images to GitHub Container Registry
- **Multi-Environment:** Separate staging and production deployments

### Deployment Branches:
- `main` → Staging environment
- `production` → Production environment

### Setting up CD:

1. **Enable GitHub Actions:**
   ```bash
   # Push to your repository
   git push origin main
   ```

2. **Configure Secrets:**
   Add these secrets to your GitHub repository:
   ```
   GOOGLE_SEARCH_API_KEY
   GOOGLE_SEARCH_ENGINE_ID
   BING_SEARCH_API_KEY
   DATABASE_URL
   ```

3. **Automatic Deployment:**
   - Push to `main` → deploys to staging
   - Push to `production` → deploys to production
   - Pull requests → run tests automatically

### Database Migrations:

```bash
# Production migration
npm run db:push

# Development
npm run db:studio  # Database management UI
```

## Database Setup

### Recommended Providers:

1. **Neon** (Recommended for Vercel)
   - Serverless PostgreSQL
   - Generous free tier
   - Branch-based development

2. **Railway PostgreSQL**
   - Integrated with Railway deployments
   - Simple setup

3. **Render PostgreSQL**
   - Included with Render web services
   - Automatic backups

4. **Supabase**
   - PostgreSQL with real-time features
   - Built-in authentication

### Database Schema:
The application uses Drizzle ORM with automatic migrations:
```bash
# Push schema changes
npm run db:push

# Generate migrations (if needed)
npm run db:generate
```

## Monitoring & Maintenance

### Health Checks
- Endpoint: `GET /health`
- Returns system status, uptime, memory usage
- Used by load balancers and monitoring systems

### Logging
- Structured logging for API requests
- Error tracking with stack traces
- Performance monitoring

### Performance Optimization

1. **Database Indexes:**
   ```sql
   CREATE INDEX idx_search_results_user_id ON search_results(user_id);
   CREATE INDEX idx_prospects_created_at ON prospects(created_at);
   ```

2. **Caching Strategy:**
   - API response caching
   - Search result caching
   - Static asset CDN

3. **Rate Limiting:**
   - Built-in compliance middleware
   - Platform-specific rate limits
   - Usage tracking and analytics

### Security Checklist

- ✅ Environment variables for secrets
- ✅ HTTPS enforced
- ✅ Rate limiting enabled
- ✅ Input validation
- ✅ SQL injection prevention
- ✅ CORS configuration
- ✅ Security headers

### Backup Strategy

1. **Database Backups:**
   - Automated daily backups
   - Point-in-time recovery
   - Cross-region replication

2. **Application Backups:**
   - Git repository as source of truth
   - Docker images in registry
   - Configuration management

## Cost Optimization

### Free Tier Combinations:
- **Vercel** (hosting) + **Neon** (database) = $0/month for small projects
- **Netlify** (frontend) + **Railway** (backend + database) = $0-5/month
- **Render** (full-stack) = $0/month (with limitations)

### Scaling Considerations:
- Start with free tiers
- Monitor usage and costs
- Upgrade based on actual needs
- Consider serverless for variable traffic

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   ```bash
   npm ci  # Clean install
   npm run type-check  # Check TypeScript
   npm run build  # Test build locally
   ```

2. **Database Connection:**
   ```bash
   # Test database connection
   npm run db:studio
   
   # Check environment variables
   echo $DATABASE_URL
   ```

3. **API Errors:**
   - Verify API keys are set correctly
   - Check rate limits and quotas
   - Review application logs

4. **Performance Issues:**
   - Check database query performance
   - Monitor memory usage
   - Review API response times

## Support

- **Documentation:** Check this guide and API documentation
- **GitHub Issues:** Report bugs and feature requests
- **Community:** Join discussions in GitHub Discussions

---

**Ready to deploy?** Choose your preferred platform above and follow the specific guide. Most deployments take less than 10 minutes to complete!