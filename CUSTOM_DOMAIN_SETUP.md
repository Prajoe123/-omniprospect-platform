# Custom Domain Setup for OmniProspect

This guide shows you how to connect your own domain name (like `yourcompany.com` or `app.yourcompany.com`) to your deployed OmniProspect application.

## Prerequisites

- Your OmniProspect app deployed on a cloud platform
- A domain name you own (from registrars like Namecheap, GoDaddy, Cloudflare, etc.)
- Access to your domain's DNS settings

## Platform-Specific Setup

### 1. Vercel Custom Domain

**Steps:**
1. Go to your Vercel dashboard
2. Select your OmniProspect project
3. Click "Settings" → "Domains"
4. Add your domain (e.g., `app.yourcompany.com`)
5. Vercel provides DNS instructions

**DNS Configuration:**
```
Type: CNAME
Name: app (or your subdomain)
Value: cname.vercel-dns.com
```

**For Root Domain (yourcompany.com):**
```
Type: A
Name: @
Value: 76.76.19.19

Type: A  
Name: @
Value: 76.223.126.88
```

### 2. Railway Custom Domain

**Steps:**
1. Open Railway dashboard
2. Select your OmniProspect service
3. Go to "Settings" → "Networking"
4. Click "Custom Domain"
5. Enter your domain name

**DNS Configuration:**
```
Type: CNAME
Name: app (or your subdomain)
Value: your-app-name.railway.app
```

### 3. Render Custom Domain

**Steps:**
1. Go to Render dashboard
2. Select your web service
3. Click "Settings" → "Custom Domains"
4. Add your domain
5. Follow verification steps

**DNS Configuration:**
```
Type: CNAME
Name: app
Value: your-app-name.onrender.com
```

### 4. Netlify Custom Domain

**Steps:**
1. Netlify dashboard → Site settings
2. "Domain management" → "Add custom domain"
3. Enter your domain
4. Configure DNS

**DNS Configuration:**
```
Type: CNAME
Name: app
Value: your-site-name.netlify.app
```

## SSL Certificate Setup

All platforms provide **automatic SSL certificates**:
- ✅ Free Let's Encrypt certificates
- ✅ Auto-renewal
- ✅ HTTP to HTTPS redirects
- ✅ Modern TLS security

**Verification:** Your app will be accessible at `https://your-domain.com`

## Complete DNS Configuration Example

If your domain is `yourcompany.com` and you want `app.yourcompany.com`:

**For Cloudflare DNS:**
```
Type: CNAME
Name: app
Content: your-app.vercel.app (or your platform's domain)
Proxy status: Proxied (recommended)
TTL: Auto
```

**For Traditional DNS (Namecheap, GoDaddy):**
```
Type: CNAME
Host: app
Value: your-app.vercel.app
TTL: 300 (5 minutes)
```

## Domain Verification Process

### Typical Timeline:
1. **Add domain to platform** - Instant
2. **Configure DNS** - 5-10 minutes
3. **DNS propagation** - 5 minutes to 48 hours
4. **SSL certificate generation** - 5-15 minutes after DNS resolves

### Verification Commands:
```bash
# Check DNS propagation
nslookup app.yourcompany.com

# Check SSL certificate
curl -I https://app.yourcompany.com

# Test full application
curl https://app.yourcompany.com/health
```

## Environment Variable Updates

After setting up your custom domain, update these environment variables:

```env
# Frontend URL
FRONTEND_URL=https://app.yourcompany.com

# CORS Origin
CORS_ORIGIN=https://app.yourcompany.com

# API Base URL (if using separate backend)
API_BASE_URL=https://api.yourcompany.com
```

## Advanced DNS Configuration

### Subdomain Strategy:
- `app.yourcompany.com` - Main application
- `api.yourcompany.com` - API endpoints (if separate)
- `admin.yourcompany.com` - Admin dashboard
- `docs.yourcompany.com` - Documentation

### Multiple Environment Domains:
- `app.yourcompany.com` - Production
- `staging.yourcompany.com` - Staging
- `dev.yourcompany.com` - Development

## Cloudflare Integration (Recommended)

**Benefits:**
- Global CDN acceleration
- DDoS protection
- Advanced caching rules
- Analytics and monitoring

**Setup:**
1. Transfer domain to Cloudflare (or use as DNS provider)
2. Point CNAME to your app's domain
3. Enable "Proxied" status
4. Configure page rules for caching

**Page Rules Example:**
```
app.yourcompany.com/api/*
- Cache Level: Bypass
- Browser Cache TTL: Respect Existing Headers

app.yourcompany.com/*
- Cache Level: Standard
- Browser Cache TTL: 1 hour
```

## Troubleshooting

### Common Issues:

**1. DNS Not Propagating**
```bash
# Check different DNS servers
dig @8.8.8.8 app.yourcompany.com
dig @1.1.1.1 app.yourcompany.com

# Wait 24-48 hours for full propagation
```

**2. SSL Certificate Errors**
- Ensure DNS is pointing correctly
- Wait for certificate generation (15 minutes)
- Check platform status pages

**3. Platform-Specific Issues**

**Vercel:**
- Domain must be verified via TXT record
- Check project settings for correct domain

**Railway:**
- Ensure service is running
- Check custom domain status in dashboard

**Render:**
- Verify domain ownership
- Check service logs for errors

### Quick Fixes:
```bash
# Clear DNS cache (Mac)
sudo dscacheutil -flushcache

# Clear DNS cache (Windows)
ipconfig /flushdns

# Test from different location
curl -H "Host: app.yourcompany.com" http://your-platform-domain.com/health
```

## Security Considerations

### Recommended Headers:
```nginx
# In your platform's header configuration
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
```

### CORS Configuration:
```javascript
// Update in your app configuration
const allowedOrigins = [
  'https://app.yourcompany.com',
  'https://yourcompany.com'
];
```

## Performance Optimization

### CDN Configuration:
- Static assets cached at edge locations
- API responses cached based on headers
- Global load balancing

### Monitoring Setup:
- Set up uptime monitoring for your domain
- Configure alerting for SSL certificate expiration
- Monitor DNS resolution times

## Cost Considerations

### Domain + Hosting Costs:
- **Domain registration**: $10-15/year
- **Hosting with custom domain**: Usually included
- **CDN/Security (Cloudflare Pro)**: $20/month (optional)

### Total Monthly Cost Examples:
- **Basic**: Domain only (~$1/month)
- **Professional**: Domain + Cloudflare Pro (~$21/month)
- **Enterprise**: Domain + advanced features (~$50+/month)

## Next Steps

1. **Choose your domain name** (if you don't have one)
2. **Select your preferred platform** from your deployment
3. **Follow the platform-specific setup** above
4. **Configure DNS** at your domain registrar
5. **Wait for propagation** (usually 5-30 minutes)
6. **Test your custom domain** - visit `https://your-domain.com`
7. **Update environment variables** with your new domain

Your OmniProspect application will then be accessible at your custom domain with professional HTTPS security!