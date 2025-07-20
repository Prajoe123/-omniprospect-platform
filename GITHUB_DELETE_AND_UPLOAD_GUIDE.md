# How to Delete GitHub Repository Files and Upload New Project

## Method 1: Delete Individual Files (GitHub Web Interface)

### Step 1: Delete Each File
1. **Go to your GitHub repository**
2. **Click on each file** you want to delete
3. **Click the trash can icon** (🗑️) in the top right of the file view
4. **Add commit message** like "Delete old files"
5. **Click "Commit changes"**
6. **Repeat for each file/folder**

### Step 2: Delete Folders
1. **Click on folder name** (if any exist)
2. **Click on any file** inside the folder
3. **Click trash can icon** and delete
4. **Repeat** until folder is empty (GitHub auto-deletes empty folders)

## Method 2: Create New Repository (Easiest)

### Step 1: Create Fresh Repository
1. **Go to GitHub** → Click "New repository"
2. **Name it**: `omniprospect-app` (or similar)
3. **Don't initialize** with README
4. **Click "Create repository"**

### Step 2: Upload Complete Project
1. **Download your Replit project** as zip
2. **Extract all files**
3. **Go to new GitHub repository**
4. **Click "uploading an existing file"**
5. **Drag and drop ALL folders and files**:
   - client/ folder
   - server/ folder  
   - shared/ folder
   - package.json
   - render.yaml
   - All other files

## Method 3: GitHub Desktop (Recommended)

### Step 1: Install GitHub Desktop
1. **Download GitHub Desktop** from desktop.github.com
2. **Sign in** with your GitHub account

### Step 2: Clone and Replace
1. **Clone your repository** to your computer
2. **Delete everything** in the local folder
3. **Copy all files** from your Replit download
4. **Commit and push** changes

## Method 4: Force Push (Advanced)

If you're comfortable with command line:
1. **Download Replit project**
2. **Open terminal** in the extracted folder
3. **Run these commands**:
```bash
git init
git add .
git commit -m "Upload complete OmniProspect project"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push --force origin main
```

## Verification Checklist

After upload, your GitHub repository should show:
- ✅ **client/** - React frontend with src/ folder
- ✅ **server/** - Node.js backend with index.ts
- ✅ **shared/** - TypeScript schemas  
- ✅ **package.json** - Dependencies and scripts
- ✅ **render.yaml** - Deployment configuration
- ✅ **vite.config.ts** - Build configuration
- ✅ **tailwind.config.ts** - Styling configuration

## After Upload: Deploy to Render

1. **Update Render service** (if using existing) to point to new repository
2. **Or create new Render service** connected to your repository
3. **Deploy** → "Deploy latest commit"
4. **Monitor logs** for successful build
5. **Test app** at your Render URL

## Recommended Approach

**For your situation, I recommend Method 2 (Create New Repository):**
- Clean start
- No file conflicts
- Upload everything at once
- Update Render to use new repository

This avoids the tedious process of deleting files one by one and ensures you get the complete project structure uploaded correctly.