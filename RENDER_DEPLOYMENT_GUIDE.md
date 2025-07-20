# Deploy OmniProspect to Render.com - Complete Guide

This guide will walk you through deploying your OmniProspect application to Render.com with a PostgreSQL database.

## Prerequisites

- GitHub account with your OmniProspect repository
- Render.com account (free to create)
- Google Custom Search API key (optional but recommended)
- Bing Search API key (optional)

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
# If not already on GitHub, initialize and push
git init
git add .
git commit -m "Initial commit - OmniProspect"
git branch -M main
git remote add origin https://github.com/yourusername/omniprospect.git
git push -u origin main
```

### 1.2 Verify Required Files
Your repository should include these files (already created):
- `render.yaml` - Render configuration
- `package.json` - Dependencies and scripts
- `Dockerfile` - Container configuration (backup)
- `.env.example` - Environment variables template

## Step 2: Create Render Account and Services

### 2.1 Sign Up
1. Go to [render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up with GitHub (recommended for easy repository access)

### 2.2 Connect GitHub Repository
1. In Render dashboard, click "New +"
2. Select "Web Service"
3. Connect your GitHub account if not already connected
4. Find and select your OmniProspect repository
5. Click "Connect"

## Step 3: Configure Web Service

### 3.1 Basic Configuration
- **Name**: `omniprospect` (or your preferred name)
- **Region**: Choose closest to your users (US East, EU West, etc.)
- **Branch**: `main`
- **Root Directory**: Leave empty
- **Runtime**: `Node`

### 3.2 Build Configuration
Render will auto-detect from your `package.json`:
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`

### 3.3 Plan Selection
- **Free Plan**: Good for testing (sleeps after 15 min inactivity)
- **Starter Plan**: $7/month (recommended for production)

## Step 4: Create PostgreSQL Database

### 4.1 Add Database Service
1. In Render dashboard, click "New +" again
2. Select "PostgreSQL"
3. Configure database:
   - **Name**: `omniprospect-db`
   - **Database**: `omniprospect`
   - **User**: `omniprospect`
   - **Region**: Same as your web service
   - **Plan**: Free (1GB) or Starter ($7/month for 10GB)

### 4.2 Note Connection Details
After creation, go to database info page and copy:
- **Internal Database URL** (for environment variables)
- **External Database URL** (for external connections)

## Step 5: Configure Environment Variables

### 5.1 Required Variables
In your web service settings, add these environment variables:

```
# Database (use Internal Database URL from your PostgreSQL service)
DATABASE_URL=postgresql://omniprospect:password@host:5432/omniprospect

# Application
NODE_ENV=production

# Search APIs (get these from respective providers)
GOOGLE_SEARCH_API_KEY=your_google_api_key_here
GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id_here
BING_SEARCH_API_KEY=your_bing_api_key_here

# Security
SESSION_SECRET=generate_random_string_here

# Optional: Rate Limiting
LINKEDIN_DAILY_LIMIT=100
GOOGLE_DAILY_LIMIT=100
BING_DAILY_LIMIT=1000
```

### 5.2 How to Get API Keys

**Google Custom Search API:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable "Custom Search API"
4. Create credentials → API Key
5. Set up Custom Search Engine at [cse.google.com](https://cse.google.com/)

**Bing Web Search API:**
1. Sign up at [Azure Portal](https://portal.azure.com/)
2. Create "Cognitive Services" → "Bing Search v7"
3. Copy API key from resource overview

### 5.3 Generate Session Secret
```bash
# Generate random session secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 6: Deploy Application

### 6.1 Initial Deployment
1. Click "Create Web Service"
2. Render will automatically:
   - Clone your repository
   - Install dependencies (`npm ci`)
   - Build the application (`npm run build`)
   - Start the server (`npm start`)

### 6.2 Monitor Deployment
- Watch the deploy logs in Render dashboard
- Look for "Your service is live" message
- Initial deployment takes 2-3 minutes

### 6.3 Access Your Application
- Your app will be available at: `https://your-app-name.onrender.com`
- Click the provided URL to test

## Step 7: Initialize Database

### 7.1 Run Database Migrations
After successful deployment:
1. Go to your web service in Render dashboard
2. Click "Shell" (if available) or use environment variables
3. Run database setup:

**Option A: Via Render Shell**
```bash
npm run db:push
```

**Option B: Local Setup (if shell not available)**
```bash
# On your local machine, temporarily set DATABASE_URL
export DATABASE_URL="your_render_database_external_url"
npm run db:push
```

## Step 8: Custom Domain Setup (Optional)

### 8.1 Add Custom Domain
1. In web service settings, go to "Custom Domains"
2. Add your domain (e.g., `app.yourcompany.com`)
3. Follow DNS configuration instructions

### 8.2 DNS Configuration
```
Type: CNAME
Name: app
Value: your-app-name.onrender.com
```

### 8.3 SSL Certificate
- Render automatically provides free SSL certificates
- HTTPS is enabled by default
- Certificates auto-renew

## Step 9: Environment-Specific Configuration

### 9.1 Update Environment Variables
Add your custom domain to environment variables:
```
FRONTEND_URL=https://app.yourcompany.com
CORS_ORIGIN=https://app.yourcompany.com
```

### 9.2 Health Check
Your app includes a health endpoint at `/health`
- Render automatically monitors this endpoint
- Shows service status in dashboard

## Step 10: Continuous Deployment

### 10.1 Automatic Deployments
Render automatically deploys when you push to your main branch:
```bash
git add .
git commit -m "Update feature"
git push origin main
# Render automatically deploys the changes
```

### 10.2 Deploy Hooks
You can also trigger deployments manually:
- Use deploy hooks in Render dashboard
- Set up webhooks for external triggers

## Step 11: Monitoring and Maintenance

### 11.1 Application Logs
- View real-time logs in Render dashboard
- Monitor for errors and performance issues
- Logs are retained for 7 days

### 11.2 Database Management
- Access database via Render dashboard
- Use external tools with external database URL
- Set up automated backups (paid plans)

### 11.3 Performance Monitoring
```bash
# Check application health
curl https://your-app.onrender.com/health

# Monitor response times
curl -w "%{time_total}" https://your-app.onrender.com/api/dashboard/stats
```

## Troubleshooting

### Common Issues and Solutions

**Build Failures:**
```bash
# Check Node.js version in logs
# Ensure package.json has correct scripts
# Verify all dependencies are in package.json
```

**Database Connection Errors:**
```bash
# Verify DATABASE_URL is correct
# Check database service is running
# Ensure database and web service are in same region
```

**API Errors:**
```bash
# Verify environment variables are set
# Check API key permissions and quotas
# Review application logs for specific errors
```

**Performance Issues:**
```bash
# Free plans sleep after 15 minutes of inactivity
# Upgrade to Starter plan for always-on service
# Monitor memory usage in dashboard
```

## Cost Breakdown

### Free Tier:
- **Web Service**: Free (with limitations)
- **PostgreSQL**: Free (1GB storage)
- **Total**: $0/month
- **Limitations**: Service sleeps, 750 hours/month

### Production Setup:
- **Web Service**: $7/month (Starter)
- **PostgreSQL**: $7/month (Starter - 10GB)
- **Total**: $14/month
- **Benefits**: Always-on, better performance, more storage

## Security Best Practices

### 11.1 Environment Variables
- Never commit API keys to repository
- Use Render's environment variable management
- Rotate API keys periodically

### 11.2 Database Security
- Use internal database URL when possible
- Restrict database access to necessary services
- Enable SSL connections

### 11.3 Application Security
- Keep dependencies updated
- Monitor for security vulnerabilities
- Use HTTPS for all connections

## Next Steps

1. **Test Your Deployment**: Visit your app URL and test all features
2. **Set Up Monitoring**: Configure uptime monitoring
3. **Custom Domain**: Add your domain for professional appearance
4. **Backup Strategy**: Set up database backups
5. **Performance Optimization**: Monitor and optimize based on usage

## Support

- **Render Documentation**: [render.com/docs](https://render.com/docs)
- **Render Support**: Available through dashboard
- **Application Issues**: Check this repository's issues section

Your OmniProspect application is now live on Render.com with automatic deployments and professional hosting!