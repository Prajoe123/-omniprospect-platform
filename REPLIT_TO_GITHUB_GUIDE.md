# Deploy OmniProspect from Replit to GitHub

Since Replit has Git restrictions, here are 3 easy ways to get your OmniProspect code to GitHub:

## Method 1: Download and Upload (Easiest)

### Step 1: Download Your Project
1. **In Replit**: Click the three dots menu (⋮) next to your project name
2. **Select "Download as zip"**
3. **Save the zip file** to your computer
4. **Extract the zip file**

### Step 2: Upload to GitHub
1. **Go to your GitHub repository**
2. **Click "uploading an existing file"** or drag and drop
3. **Select all the extracted files**
4. **Commit the changes**

## Method 2: GitHub Web Interface (No Command Line)

### Step 1: Prepare Files
1. **Open each important file** in Replit
2. **Copy the contents** (Ctrl+A, Ctrl+C)

### Step 2: Create/Update Files on GitHub
1. **Go to your GitHub repository**
2. **Click "Create new file" or edit existing files**
3. **Paste the content** for each file
4. **Commit each change**

**Key files to upload:**
- `package.json`
- `render.yaml` 
- All files in `client/`, `server/`, `shared/` folders
- Configuration files: `vite.config.ts`, `tailwind.config.ts`, etc.

## Method 3: Git via Desktop (Recommended)

### Step 1: Install GitHub Desktop
1. Download **GitHub Desktop** from desktop.github.com
2. **Sign in** with your GitHub account

### Step 2: Clone Your Repository
1. **Clone your existing repository** to your computer
2. **Delete all old files** in the cloned folder
3. **Copy all OmniProspect files** from the downloaded Replit zip
4. **Commit and push** using GitHub Desktop

## What Files to Include

**Essential Files:**
```
├── client/                 # React frontend
├── server/                 # Express backend  
├── shared/                 # TypeScript schemas
├── package.json           # Dependencies
├── package-lock.json      # Lock file
├── render.yaml            # Render deployment config
├── vite.config.ts         # Build config
├── tailwind.config.ts     # Styling
├── tsconfig.json          # TypeScript config
├── .env.example           # Environment template
└── All *.md files         # Documentation
```

**Files to EXCLUDE:**
```
node_modules/              # Dependencies (will be installed)
dist/                      # Build output
.replit                    # Replit-specific
.upm/                      # Replit package manager
```

## After GitHub Upload

### Deploy to Render.com:
1. **Go to Render dashboard**
2. **Create new Web Service** (if needed)
3. **Connect your GitHub repository**
4. **Deploy automatically** with the included `render.yaml`

### Your app will be live at:
`https://your-app-name.onrender.com`

## Verification Checklist

✅ **Files uploaded to GitHub**
✅ **render.yaml included**
✅ **package.json with correct scripts**
✅ **Environment variables set in Render**
✅ **PostgreSQL database created**
✅ **App deployed and accessible**

## Quick Test Commands

After deployment, test your app:
```bash
# Health check
curl https://your-app.onrender.com/health

# API test  
curl https://your-app.onrender.com/api/dashboard/stats
```

Choose the method that feels most comfortable for you. Method 1 (Download and Upload) is usually the fastest and easiest!