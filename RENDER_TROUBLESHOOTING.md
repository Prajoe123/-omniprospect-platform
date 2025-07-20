# Render.com Deployment Troubleshooting

## ✅ ISSUE FIXED: Port Configuration

**Problem:** App was hardcoded to port 5000, but Render requires `process.env.PORT`
**Solution:** Updated server to use dynamic port configuration

## How to Check Deployment Status

### 1. Check Render Deployment Logs
1. **Go to Render Dashboard** → Your Web Service
2. **Click "Logs" tab** to see deployment details
3. **Look for successful startup:**
```bash
✓ Build completed successfully
✓ Starting service...
✓ serving on port [PORT_NUMBER]
✓ Health check passed
```

### 2. Common Error Messages (Now Fixed)
```bash
# Port binding error (FIXED)
Error: listen EADDRINUSE: address already in use

# Build failure
npm ERR! Failed at build step

# Start command error  
Error: Cannot find module 'dist/index.js'

# Database connection error
Error: connection to database failed
```

## Testing Your Deployed App

### Quick Tests:
```bash
# Health check (should return JSON)
curl https://your-app-name.onrender.com/health

# Homepage (should return HTML)
curl https://your-app-name.onrender.com/

# API endpoint (should return JSON)
curl https://your-app-name.onrender.com/api/dashboard/stats
```

## If App Still Won't Load

### Check These in Order:

**1. Build Logs:**
- Look for "Build completed successfully"
- Check for npm install errors
- Verify all dependencies installed

**2. Runtime Logs:**
- Look for "serving on port [number]"
- Check for database connection errors
- Verify environment variables

**3. Environment Variables:**
```
NODE_ENV=production
DATABASE_URL=[from your PostgreSQL service]
SESSION_SECRET=[generated automatically]
```

**4. Database Issues:**
- Ensure PostgreSQL service is running
- Check DATABASE_URL is connected
- Run `npm run db:push` after first deploy

### Manual Database Setup (if needed):
1. Go to your PostgreSQL service in Render
2. Copy the "External Database URL"
3. Use a database client to connect
4. Or run migration from your local machine:
```bash
export DATABASE_URL="your_render_external_database_url"
npm run db:push
```

## Success Indicators

**Your app is working when you see:**
✅ **Build**: "Build completed successfully"  
✅ **Start**: "serving on port [number]"
✅ **Health**: `/health` endpoint returns JSON
✅ **Frontend**: Homepage loads with OmniProspect UI
✅ **API**: `/api/*` endpoints return data

## Free Tier Limitations

**Render Free Tier:**
- App sleeps after 15 minutes of inactivity
- First request after sleep takes 10-30 seconds to wake up
- 750 hours/month limit
- For production, upgrade to Starter plan ($7/month)

## Next Steps After Successful Deployment

1. **Test all features**: Search, dashboard, compliance monitoring
2. **Set up custom domain**: Add your domain in Render settings
3. **Configure API keys**: Add search API credentials for full functionality
4. **Monitor performance**: Check logs regularly
5. **Upgrade plan**: Move to paid plan for production use

Your OmniProspect platform should now be fully accessible!