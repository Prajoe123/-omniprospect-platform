# Where to Run Git Commands in Replit

## Location: Replit Shell/Console

### Step 1: Open the Shell
1. **Look at the bottom of your Replit screen** - you'll see tabs like "Console", "Shell", or a terminal icon
2. **Click on "Shell" or "Console"** - this opens the command line interface
3. **You'll see a prompt** that looks like: `~/OmniProspect$` or similar

### Step 2: Verify You're in the Right Directory
The shell should show your project root directory. You should see:
```bash
# Check current directory
pwd
# Should show something like: /home/runner/OmniProspect

# List files to confirm you're in the right place
ls
# Should show: client/ server/ shared/ package.json etc.
```

### Step 3: Run the Git Commands
Copy and paste each command one by one into the shell:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all your new OmniProspect files
git add .

# 3. Commit with a descriptive message
git commit -m "Replace with OmniProspect - Complete lead generation platform"

# 4. Connect to your existing GitHub repository
# REPLACE with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 5. Set main branch and force push (replaces everything)
git branch -M main
git push --force origin main
```

## Visual Guide

```
┌─────────────────────────────────────────┐
│ Replit Interface                        │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Code Editor                         │ │
│ │ (Your files: client/, server/, etc.)│ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ 📟 Console/Shell Tab ← CLICK HERE   │ │
│ │ ~/OmniProspect$ git init            │ │  ← Run commands here
│ │ ~/OmniProspect$ git add .           │ │
│ │ ~/OmniProspect$ git commit -m "..." │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## Alternative Access Methods

### Method 1: Shell Tab (Most Common)
- Look for a **"Shell"** tab at the bottom of Replit
- Click it to open the terminal

### Method 2: Console Tab
- Some Replit setups show **"Console"** instead
- Click the Console tab

### Method 3: Terminal Icon
- Look for a **terminal icon** (□) in the bottom panel
- Click to open command line

### Method 4: Keyboard Shortcut
- Press **Ctrl + Shift + S** (or Cmd + Shift + S on Mac)
- This usually opens the shell

## What Each Command Does

```bash
git init                    # Creates .git folder (makes it a git repository)
git add .                   # Stages all files for commit
git commit -m "message"     # Saves changes with a description
git remote add origin URL   # Connects to your GitHub repository
git branch -M main          # Sets main as the default branch
git push --force origin main # Uploads and replaces everything on GitHub
```

## Before Running: Replace These Values

**In the git remote command, replace:**
- `YOUR_USERNAME` = Your actual GitHub username
- `YOUR_REPO_NAME` = Your actual repository name

**Example:**
```bash
# If your GitHub is: https://github.com/john123/my-leadgen-app
git remote add origin https://github.com/john123/my-leadgen-app.git
```

## What You'll See

When you run the commands successfully:
```bash
~/OmniProspect$ git init
Initialized empty Git repository in /home/runner/OmniProspect/.git/

~/OmniProspect$ git add .
(no output - this is normal)

~/OmniProspect$ git commit -m "Replace with OmniProspect - Complete lead generation platform"
[main (root-commit) abc1234] Replace with OmniProspect - Complete lead generation platform
 157 files changed, 15234 insertions(+)

~/OmniProspect$ git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
(no output - this is normal)

~/OmniProspect$ git branch -M main
(no output - this is normal)

~/OmniProspect$ git push --force origin main
Enumerating objects: 200, done.
Counting objects: 100% (200/200), done.
Delta compression using up to 4 threads
Compressing objects: 100% (180/180), done.
Writing objects: 100% (200/200), 2.5 MiB | 1.2 MiB/s, done.
Total 200 (delta 45), reused 0 (delta 0)
To https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
 + abc1234...def5678 main -> main (forced update)
```

## If You Can't Find the Shell

**Try these steps:**
1. Look at the very bottom of your Replit screen
2. Check for tabs labeled: "Console", "Shell", "Terminal"
3. If you don't see any, try clicking the "+" button to add a new tab
4. Look for a terminal/command line option

**Still can't find it?**
- Your Replit interface might be collapsed
- Try expanding the bottom panel by dragging the divider upward
- Or press **Ctrl + `** (backtick) to toggle terminal

The shell is where you type commands just like you would on your computer's command prompt or terminal.