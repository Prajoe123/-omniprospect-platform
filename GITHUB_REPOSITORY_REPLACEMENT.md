# Replace Existing GitHub Repository with New OmniProspect

This guide shows you how to safely replace your existing GitHub repository with the new OmniProspect project files.

## Method 1: Complete Repository Replacement (Recommended)

### Step 1: Backup Your Current Repository (Optional)
```bash
# Clone your existing repository to backup
git clone https://github.com/yourusername/your-repo-name.git backup-repo
```

### Step 2: Remove All Files from Repository
```bash
# Clone your existing repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Remove all files (but keep .git folder)
rm -rf * .*
# Note: This removes all files except .git directory
```

### Step 3: Copy New OmniProspect Files
```bash
# Copy all OmniProspect files to your repository
# From your Replit environment, download or copy all files:
# - package.json
# - All source code in client/, server/, shared/
# - Configuration files (vite.config.ts, tailwind.config.ts, etc.)
# - Documentation files (*.md)
# - Docker and deployment files
```

### Step 4: Commit and Push Changes
```bash
# Add all new files
git add .

# Commit the complete replacement
git commit -m "Replace repository with OmniProspect - Complete lead generation platform

- Added React + TypeScript frontend with modern UI components
- Added Node.js + Express backend with PostgreSQL
- Added multi-platform search integration (Google, Bing, DuckDuckGo)
- Added deployment configurations for Render, Vercel, Railway
- Added Docker containerization with health checks
- Added comprehensive documentation and setup guides"

# Push to GitHub (this replaces everything)
git push origin main
```

## Method 2: Force Push from Replit (Easier)

### Step 1: Initialize Git in Your Replit Project
```bash
# In your Replit console
git init
git add .
git commit -m "Initial commit - OmniProspect complete platform"
```

### Step 2: Connect to Your GitHub Repository
```bash
# Replace with your actual GitHub repository URL
git remote add origin https://github.com/yourusername/your-repo-name.git

# Force push to replace everything
git push --force origin main
```

## Method 3: Create New Repository (Cleanest)

### Step 1: Create New GitHub Repository
1. Go to GitHub.com
2. Click "New repository"
3. Name it `omniprospect` or `lead-generation-platform`
4. Don't initialize with README (we'll push from Replit)

### Step 2: Push from Replit
```bash
# In your Replit console
git init
git add .
git commit -m "Initial commit - OmniProspect platform"
git branch -M main
git remote add origin https://github.com/yourusername/omniprospect.git
git push -u origin main
```

### Step 3: Update Render.com
1. Go to your Render dashboard
2. Update your web service to use the new repository
3. Redeploy

## What Files to Include

### Essential Files for Deployment:
```
├── client/                 # React frontend
├── server/                 # Express backend
├── shared/                 # Shared TypeScript types
├── package.json           # Dependencies and scripts
├── package-lock.json      # Dependency lock file
├── vite.config.ts         # Build configuration
├── tailwind.config.ts     # Styling configuration
├── tsconfig.json          # TypeScript configuration
├── render.yaml            # Render deployment config
├── Dockerfile             # Docker configuration
├── .env.example           # Environment variables template
├── README.md              # Project documentation
└── deployment guides      # All .md documentation files
```

### Files to Exclude (already in .gitignore):
```
node_modules/
dist/
.env
.replit
.upm/
```

## Automated Script for Replit Console

```bash
#!/bin/bash
# Replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with actual values

GITHUB_USERNAME="YOUR_GITHUB_USERNAME"
REPO_NAME="YOUR_REPO_NAME"

echo "🚀 Replacing GitHub repository with OmniProspect..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
fi

# Add all files
git add .

# Commit with descriptive message
git commit -m "Deploy OmniProspect - Multi-platform lead generation platform

Features:
- React + TypeScript frontend with shadcn/ui components
- Node.js + Express backend with PostgreSQL database
- Multi-platform search integration (Google, Bing, DuckDuckGo, LinkedIn)
- Advanced search with boolean operators and filters
- Compliance monitoring and rate limiting
- Cloud deployment ready (Render, Vercel, Railway, Docker)
- Custom domain support with SSL
- Comprehensive documentation and setup guides

Technology Stack:
- Frontend: React 18, TypeScript, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript, Drizzle ORM
- Database: PostgreSQL (Neon serverless)
- State Management: TanStack Query
- UI Components: Radix UI + shadcn/ui
- Build Tools: Vite, esbuild
- Deployment: Multi-platform support"

# Set remote (replace existing if needed)
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

# Set main branch
git branch -M main

# Force push to replace repository contents
echo "⚠️  Force pushing to replace repository contents..."
git push --force-with-lease origin main

echo "✅ Repository successfully replaced with OmniProspect!"
echo "🌐 Repository URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo "📚 Next: Deploy to Render.com using the updated repository"
```

## After Repository Replacement

### Update Render.com Deployment:
1. **Check Repository Connection**: Ensure Render is still connected to your repository
2. **Trigger Redeploy**: Click "Manual Deploy" in Render dashboard
3. **Monitor Logs**: Watch the deployment process for any issues
4. **Update Environment Variables**: Ensure all required variables are set

### Verify Deployment:
```bash
# Check if your app is live
curl https://your-app-name.onrender.com/health

# Test API endpoints
curl https://your-app-name.onrender.com/api/dashboard/stats
```

## Troubleshooting

### If Git Push Fails:
```bash
# If repository has protection rules
git push --force origin main

# If you get authentication errors
git remote set-url origin https://YOUR_TOKEN@github.com/username/repo.git
```

### If Render Deployment Fails:
1. Check that `package.json` has correct scripts
2. Verify `render.yaml` is in root directory
3. Ensure all dependencies are in `package.json`
4. Check build logs for specific errors

### If Database Connection Fails:
1. Verify DATABASE_URL environment variable
2. Run `npm run db:push` to initialize schema
3. Check PostgreSQL service is running in Render

## Security Notes

- **Never commit API keys**: Use environment variables in Render
- **Use .env.example**: Template for required environment variables
- **Backup important data**: If your old repository had important data, back it up first

## Recommended Approach

**For your situation, I recommend Method 2 (Force Push from Replit)** because:
- ✅ Simplest process
- ✅ Preserves repository URL for Render
- ✅ No need to reconfigure Render deployment
- ✅ Maintains GitHub repository settings and permissions

Just run the force push commands in your Replit console, and your repository will be completely replaced with the new OmniProspect platform.