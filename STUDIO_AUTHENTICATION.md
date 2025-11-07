# Sanity Studio Authentication Guide

## Option 1: Sanity Built-in Authentication (Recommended)

Sanity Studio already has authentication built-in! When you deploy your studio, users must log in with their Sanity account.

### How It Works

1. **Only invited users can access**
   - Go to [Sanity Dashboard](https://www.sanity.io/manage)
   - Select your project (`9p9lqoeb`)
   - Go to **Members**
   - Click **Add member**
   - Enter your client's email
   - Assign role: **Editor** or **Administrator**
   - They'll receive an invitation email

2. **Login Methods**
   - Users can log in with:
     - GitHub
     - Google
     - Email/Password (if they create a Sanity account)

3. **Access Control**
   - Only invited members can access the studio
   - You control who has access via the Sanity dashboard
   - No code changes needed!

### To Set Up Email/Password Login

1. Go to [Sanity Dashboard](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **Authentication**
4. Enable **Email/Password** authentication
5. Users can then create accounts with email/password

## Option 2: Netlify Password Protection (Simple)

If you deploy Studio on Netlify, you can add basic password protection.

### Step 1: Create `.netlify/password` file

Create this file in your `sanity-studio` folder:

```bash
# In sanity-studio folder
mkdir -p .netlify
echo "username:password" > .netlify/password
```

Replace `username:password` with your credentials (e.g., `client:securepassword123`)

### Step 2: Add to `.gitignore`

Add to `sanity-studio/.gitignore`:

```
.netlify/password
```

### Step 3: Configure Netlify

1. Go to Netlify Dashboard
2. Select your Studio site
3. Go to **Site settings** → **Build & deploy** → **Environment**
4. Add environment variable:
   - Key: `NETLIFY_PASSWORD`
   - Value: `username:password` (same as in the file)

### Step 4: Add Password Protection Plugin

Install the plugin:

```bash
cd sanity-studio
npm install @sanity/password-protect
```

Update `sanity-studio/sanity.config.js`:

```javascript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {passwordProtect} from '@sanity/password-protect'

export default defineConfig({
  // ... existing config
  plugins: [
    structureTool({
      // ... existing structure
    }),
    visionTool(),
    passwordProtect({
      password: process.env.NETLIFY_PASSWORD || 'default:password',
    }),
  ],
  // ... rest of config
})
```

## Option 3: Netlify Identity (Most Secure)

Netlify Identity provides full user management.

### Step 1: Enable Netlify Identity

1. In Netlify Dashboard → Your site
2. Go to **Identity**
3. Click **Enable Identity**
4. Click **Settings and usage**
5. Enable **Enable Identity**

### Step 2: Configure Registration

- **Registration preferences**: Invite only (recommended)
- **External providers**: Enable if you want Google/GitHub login

### Step 3: Invite Users

1. Go to **Identity** → **Invite users**
2. Enter your client's email
3. They'll receive an invitation

### Step 4: Protect Studio Route

Create `netlify.toml` in `sanity-studio`:

```toml
[[redirects]]
  from = "/studio/*"
  to = "/studio/index.html"
  status = 200
  force = true
  headers = {X-From = "Netlify"}

[[redirects]]
  from = "/studio"
  to = "/.netlify/identity"
  status = 302
```

## Recommended Approach

**Use Sanity's built-in authentication** (Option 1) because:
- ✅ Already set up
- ✅ No code changes needed
- ✅ Easy to manage users
- ✅ Secure
- ✅ Works on any hosting platform
- ✅ Role-based permissions (Editor, Administrator, etc.)

## Quick Setup for Your Client

1. **Invite your client**:
   - Go to [Sanity Dashboard](https://www.sanity.io/manage)
   - Select project `9p9lqoeb`
   - **Members** → **Add member**
   - Enter client's email
   - Role: **Editor** (can edit/publish) or **Administrator** (full access)

2. **Client logs in**:
   - Visit `https://your-studio.netlify.app/studio`
   - Click "Log in"
   - Choose: GitHub, Google, or create Sanity account
   - Accept invitation

3. **That's it!** Only invited members can access.

## Security Best Practices

1. **Use strong passwords** (if using email/password)
2. **Regularly review members** (remove old users)
3. **Use appropriate roles**:
   - **Editor**: Can edit and publish
   - **Administrator**: Full access
   - **Viewer**: Read-only
4. **Enable 2FA** (if available in Sanity)
5. **Monitor access** in Sanity Dashboard

## Troubleshooting

### Client can't log in
- Check they received and accepted the invitation
- Verify their email is correct
- Check they're using the correct login method

### Studio shows login but client isn't invited
- Go to Sanity Dashboard → Members
- Verify their email is listed
- Re-send invitation if needed

### Want to remove access
- Go to Sanity Dashboard → Members
- Click on user → Remove member

