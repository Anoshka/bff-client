# Deployment Guide

## Publishing Your Site to Netlify

### Prerequisites
- Netlify account (free tier works)
- GitHub account (or GitLab/Bitbucket)
- Your code pushed to a Git repository

### Step 1: Deploy Sanity Studio

Sanity Studio can be deployed separately or embedded in your main site. Here are both options:

#### Option A: Deploy Studio Separately (Recommended)

1. **In your `sanity-studio` folder**, create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/studio/*"
  to = "/studio/index.html"
  status = 200
```

2. **Push to GitHub** (if not already):
   ```bash
   cd sanity-studio
   git init
   git add .
   git commit -m "Initial Sanity Studio"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Deploy to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your `sanity-studio` repository
   - Build settings:
     - **Base directory**: `sanity-studio` (if repo is at root) or leave blank if repo IS the studio
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Set Environment Variables**:
   - In Netlify: Site settings → Environment variables
   - Add:
     - `SANITY_STUDIO_PROJECT_ID` = `9p9lqoeb`
     - `SANITY_STUDIO_DATASET` = `production`

5. **Access your Studio**:
   - Your Studio will be at: `https://your-site-name.netlify.app/studio`
   - Log in with your Sanity account

#### Option B: Embed Studio in Main Site

1. **In your root folder**, create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/studio/*"
  to = "/studio/index.html"
  status = 200
```

2. **Add build script** to root `package.json`:
```json
{
  "scripts": {
    "build:studio": "cd sanity-studio && npm run build",
    "build": "npm run build:studio && vite build"
  }
}
```

3. **Deploy main site** (see Step 2 below)

### Step 2: Deploy React App

1. **Create `netlify.toml` in root** (if not using Option B above):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

3. **Deploy to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Set Environment Variables**:
   - In Netlify: Site settings → Environment variables
   - Add:
     - `VITE_SANITY_PROJECT_ID` = `9p9lqoeb`
     - `VITE_SANITY_DATASET` = `production`

5. **Your site is live!**
   - Visit your Netlify URL
   - Content from Sanity will load automatically

### Step 3: Configure CORS (Already Fixed)

If you had CORS issues, they should be resolved. If you still see issues:

1. Go to [Sanity Dashboard](https://www.sanity.io/manage)
2. Select your project (`9p9lqoeb`)
3. Go to **API** → **CORS origins**
4. Add your Netlify URL: `https://your-site-name.netlify.app`
5. Check "Allow credentials"

### Step 4: Test Everything

1. **Test Sanity Studio**:
   - Visit `https://your-studio.netlify.app/studio`
   - Log in and create/edit content

2. **Test React Site**:
   - Visit your main site URL
   - Verify adoptables load
   - Test dynamic pages
   - Check header navigation

3. **Test Forms**:
   - Create a page with a form block
   - Test form submission (currently logs to console)

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- Deploy when you push to `main` branch
- Run builds on every commit
- Show preview deployments for pull requests

## Custom Domain

1. In Netlify: Site settings → Domain management
2. Click "Add custom domain"
3. Follow instructions to configure DNS

## Troubleshooting

### Build Fails
- Check Netlify build logs
- Verify environment variables are set
- Ensure all dependencies are in `package.json`

### Content Not Loading
- Verify CORS is configured
- Check environment variables match
- Check browser console for errors

### Studio Not Accessible
- Verify `basePath: "/studio"` in `sanity.config.js`
- Check redirect rules in `netlify.toml`

