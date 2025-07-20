# Step-by-Step: Clean Up GitHub and Upload OmniProspect

## Quick Solution: Create New Repository

Since deleting files one-by-one in GitHub is tedious, here's the fastest approach:

### Step 1: Download Your Complete Project
1. **In Replit**: Look for menu (⋮) or "Files" menu
2. **Click "Download as zip"** or "Export project"
3. **Save and extract** the zip file
4. **Verify contents**: Should see client/, server/, shared/ folders

### Step 2: Create Fresh GitHub Repository
1. **Go to GitHub.com**
2. **Click green "New" button** (or "+" → "New repository")
3. **Repository name**: `omniprospect` or `leadgen-platform`
4. **Description**: "OmniProspect - Multi-platform lead generation platform"
5. **Public or Private**: Your choice
6. **DON'T check** "Initialize with README"
7. **Click "Create repository"**

### Step 3: Upload All Project Files
1. **In your new empty repository**: Click "uploading an existing file"
2. **Drag and drop** ALL folders from your extracted Replit project:
   - client/ (entire folder)
   - server/ (entire folder)
   - shared/ (entire folder)
   - package.json
   - package-lock.json
   - render.yaml
   - vite.config.ts
   - tailwind.config.ts
   - tsconfig.json
   - All .md documentation files

3. **Commit message**: "Upload complete OmniProspect platform"
4. **Click "Commit changes"**

### Step 4: Update Render Deployment
1. **Go to Render dashboard**
2. **Your web service** → Settings
3. **Repository**: Update to point to your new repository
4. **Save changes**
5. **Manual Deploy** → "Deploy latest commit"

## Alternative: Delete Files in Old Repository

If you prefer to keep your existing repository:

### Delete Method A: One-by-One
1. **Go to your repository**
2. **Click each file**
3. **Click trash icon (🗑️)**
4. **Commit deletion**
5. **Repeat for all files**

### Delete Method B: Edit on GitHub
1. **Click any file**
2. **Click edit (pencil icon)**
3. **Select all content (Ctrl+A)**
4. **Delete**
5. **Commit changes**

## Files That Must Be Uploaded

**Critical for deployment:**
```
client/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html

server/
├── index.ts (with port fix)
├── routes.ts
├── storage.ts
└── vite.ts

shared/
├── schema.ts
└── advanced-search-schema.ts

package.json (with all dependencies)
render.yaml (deployment config)
vite.config.ts (build config)
```

## After Upload Success

Your GitHub repository URL will be:
`https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`

Test the upload by checking:
- Repository shows all folders
- package.json contains scripts and dependencies
- render.yaml exists for deployment
- server/index.ts has the port fix

Then redeploy on Render and your OmniProspect platform will be live!

**Recommended**: Create new repository - it's faster and cleaner than deleting files individually.