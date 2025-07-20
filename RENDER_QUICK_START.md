# Quick Start: Deploy to Render.com in 5 Minutes

## Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub (recommended)

## Step 2: Deploy from GitHub
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select your OmniProspect repository

## Step 3: Basic Configuration
- **Name**: `omniprospect`
- **Runtime**: `Node`
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Plan**: Free (or Starter for production)

## Step 4: Add PostgreSQL Database
1. Click "New +" → "PostgreSQL"
2. **Name**: `omniprospect-db`
3. **Plan**: Free
4. Click "Create Database"

## Step 5: Environment Variables
Add these in your web service settings:

**Required:**
```
DATABASE_URL=[automatically connected from database]
NODE_ENV=production
SESSION_SECRET=[generate random string]
```

**Optional (for search functionality):**
```
GOOGLE_SEARCH_API_KEY=your_key_here
GOOGLE_SEARCH_ENGINE_ID=your_id_here
BING_SEARCH_API_KEY=your_key_here
```

## Step 6: Deploy
1. Click "Create Web Service"
2. Wait 2-3 minutes for deployment
3. Visit your app at: `https://your-app-name.onrender.com`

## Step 7: Initialize Database
After deployment, run:
```bash
# Via Render shell or locally with DATABASE_URL
npm run db:push
```

## That's it! Your app is live.

**Total Cost:**
- Free plan: $0/month (sleeps after 15 min)
- Production plan: $14/month (always-on)

**App URL:** `https://your-app-name.onrender.com`
**Health Check:** `https://your-app-name.onrender.com/health`