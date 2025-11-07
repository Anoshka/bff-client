# Settings Schema Explanation

The **Settings** schema in Sanity is a singleton document that stores site-wide configuration. Think of it as your site's "control panel" that affects the entire website.

## What Settings Does

The Settings document allows you to manage global site configuration without editing code. It's perfect for:

- **Branding**: Logo, site name, colors
- **Hero Section**: Homepage banner image and text
- **Contact Information**: Email, phone number
- **Social Media Links**: Facebook, Instagram, Twitter URLs
- **Theme Colors**: Primary and secondary colors

## How to Use Settings

1. **In Sanity Studio**:
   - Go to "Settings" in the sidebar
   - Create the settings document (only one exists)
   - Fill in the fields you want to use
   - Click "Publish"

2. **In Your React App**:
   - Fetch settings using the `settingsQuery` from `sanityClient.js`
   - Use the values throughout your site

## Example Usage in React

```javascript
import { client, settingsQuery } from './lib/sanityClient';

// Fetch settings
const settings = await client.fetch(settingsQuery);

// Use in components
<img src={urlFor(settings.logo).url()} alt={settings.siteName} />
<h1 style={{ color: settings.primaryColor }}>{settings.heroTitle}</h1>
```

## Settings Fields

| Field | Type | Description |
|-------|------|-------------|
| `siteName` | String | Your site's name (e.g., "Barney's Furry Friends") |
| `logo` | Image | Site logo (used in header, etc.) |
| `heroBanner` | Image | Homepage hero banner image |
| `heroTitle` | String | Main headline on homepage |
| `heroSubtitle` | Text | Subtitle/description on homepage |
| `primaryColor` | String | Primary brand color (hex code, e.g., "#3B82F6") |
| `secondaryColor` | String | Secondary brand color (hex code) |
| `contactEmail` | String | Main contact email address |
| `contactPhone` | String | Contact phone number |
| `socialLinks` | Object | Social media URLs (Facebook, Instagram, Twitter) |

## Benefits

✅ **No Code Changes**: Update branding without touching code  
✅ **Client-Friendly**: Non-technical users can update site-wide settings  
✅ **Centralized**: All global settings in one place  
✅ **Version Controlled**: Changes tracked in Sanity's history  

## Future Enhancements

You can extend Settings to include:
- Footer text
- Newsletter signup form ID
- Google Analytics ID
- Meta tags for SEO
- Cookie consent settings
- And more!

