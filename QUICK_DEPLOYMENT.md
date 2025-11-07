# Quick Deployment Guide

## Push Your Changes to GitHub

### Step 1: Initialize Git (if not already done)

```bash
# In your project root
git init
git add .
git commit -m "Initial commit with Sanity integration"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it (e.g., `bff-pet-adoption`)
4. **Don't** initialize with README (you already have files)
5. Click **Create repository**

### Step 3: Connect and Push

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

## Deploy to Netlify

### Step 1: Create Netlify Account

1. Go to [Netlify](https://app.netlify.com)
2. Sign up (free) or log in
3. Click **Add new site** → **Import an existing project**

### Step 2: Connect GitHub

1. Click **GitHub** to connect
2. Authorize Netlify to access your GitHub
3. Select your repository (`bff-pet-adoption`)

### Step 3: Configure Build Settings

**For your React app:**

- **Base directory**: (leave blank)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

**For Sanity Studio** (if deploying separately):

- **Base directory**: `sanity-studio`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Step 4: Set Environment Variables

In Netlify, go to **Site settings** → **Environment variables**:

**For React App:**
- `VITE_SANITY_PROJECT_ID` = `9p9lqoeb`
- `VITE_SANITY_DATASET` = `production`

**For Sanity Studio** (if separate):
- `SANITY_STUDIO_PROJECT_ID` = `9p9lqoeb`
- `SANITY_STUDIO_DATASET` = `production`

### Step 5: Deploy

1. Click **Deploy site**
2. Wait for build to complete (2-5 minutes)
3. Your site will be live at: `https://your-site-name.netlify.app`

## Create netlify.toml (Optional but Recommended)

Create `netlify.toml` in your root folder:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures React Router works correctly.

## Access Your Site

Once deployed:
- **React App**: `https://your-site-name.netlify.app`
- **Sanity Studio** (if separate): `https://your-studio-name.netlify.app/studio`

## Update CORS in Sanity (If Needed)

1. Go to [Sanity Dashboard](https://www.sanity.io/manage)
2. Select your project (`9p9lqoeb`)
3. Go to **API** → **CORS origins**
4. Add your Netlify URL: `https://your-site-name.netlify.app`
5. Check **Allow credentials** (if needed)

## Continuous Deployment

Once connected:
- Every push to `main` branch = automatic deployment
- Netlify will rebuild and redeploy automatically
- Preview deployments for pull requests

## Troubleshooting

### Build Fails
- Check Netlify build logs
- Verify all dependencies are in `package.json`
- Check environment variables are set

### Content Not Loading
- Verify CORS is configured in Sanity
- Check environment variables match
- Check browser console for errors

### Pages Not in Header
- Make sure page has `showInHeader: true` in Sanity
- Check page is **Published** (not draft)
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

## Quick Commands

```bash
# Push changes
git add .
git commit -m "Your commit message"
git push

# Netlify will automatically deploy!
```

