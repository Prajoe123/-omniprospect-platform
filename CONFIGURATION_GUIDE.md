# OmniProspect Configuration Guide

## Overview

This guide provides step-by-step instructions for configuring OmniProspect's search engines and LinkedIn integration for optimal performance and compliance.

## Initial Platform Setup

### System Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Stable internet connection
- Valid email address for account creation

### Account Creation
1. Navigate to your OmniProspect dashboard
2. Complete the initial setup wizard
3. Review and accept the compliance guidelines
4. Configure your user preferences

## LinkedIn Configuration

### Understanding LinkedIn Limits

**Free LinkedIn Accounts:**
- Maximum 100 profile views per day
- 2-3 second delays between requests
- Public information only

**LinkedIn Premium/Sales Navigator:**
- Higher daily limits based on subscription
- Enhanced search capabilities
- Additional profile data access

### Configuration Steps

1. **Access LinkedIn Settings**
   ```
   Dashboard → Settings → Platform Integrations → LinkedIn
   ```

2. **Configure Rate Limiting**
   - Set daily profile limit (recommended: 80 for free accounts)
   - Configure request delays (minimum: 2 seconds)
   - Enable compliance monitoring

3. **Search Preferences**
   - Define default search parameters
   - Set geographical preferences
   - Configure industry filters

### LinkedIn Search Parameters

**Basic Search Options:**
```
Keywords: "software engineer", "marketing manager"
Location: "San Francisco Bay Area", "New York"
Company: "tech companies", "startups", "Fortune 500"
```

**Advanced Filters:**
- Current company size (1-10, 11-50, 51-200, etc.)
- Industry categories (Technology, Healthcare, Finance)
- Seniority level (Entry, Mid, Senior, Executive)
- Years of experience ranges

### Compliance Settings

**Required Configurations:**
- ✅ Enable daily limit enforcement
- ✅ Set minimum request delays
- ✅ Enable robots.txt respect
- ✅ Turn on compliance logging

**Optional Safety Features:**
- IP rotation (for larger operations)
- User agent randomization
- CAPTCHA detection and handling
- Automatic cooldown periods

## Google Custom Search API Setup

### Step 1: Google Cloud Platform Account

1. **Create Google Cloud Account**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Sign in with your Google account
   - Accept terms of service

2. **Create New Project**
   ```
   Project Name: "OmniProspect Search"
   Project ID: Will be auto-generated
   Billing: Optional for free tier
   ```

### Step 2: Enable Custom Search API

1. **Navigate to APIs & Services**
   ```
   Console → APIs & Services → Library
   ```

2. **Search and Enable**
   - Search for "Custom Search API"
   - Click "Custom Search API" from results
   - Click "Enable" button

### Step 3: Create API Credentials

1. **Create API Key**
   ```
   APIs & Services → Credentials → Create Credentials → API Key
   ```

2. **Secure Your API Key** (Recommended)
   - Click the edit icon next to your new API key
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain: `*.yourdomain.com/*`
   - Under "API restrictions", select "Restrict key"
   - Choose "Custom Search API"

### Step 4: Create Custom Search Engine

1. **Go to Custom Search Engine Console**
   - Visit [Google Custom Search](https://cse.google.com/cse/)
   - Click "Add" or "New search engine"

2. **Configure Search Engine**
   ```
   Sites to search: www.example.com (temporary)
   Name: OmniProspect Search Engine
   ```

3. **Modify for Web Search**
   - After creation, click "Setup" → "Basics"
   - Delete "www.example.com" from sites
   - Toggle "Search the entire web" to ON
   - Save changes

4. **Get Search Engine ID**
   - In the Custom Search console
   - Click "Setup" → "Basics"
   - Copy the "Search engine ID" (format: 0123456789abcdef:abcdefghij)

### Step 5: Configure in OmniProspect

1. **Access Settings**
   ```
   Dashboard → Settings → API Configuration → Google Search
   ```

2. **Enter Credentials**
   ```
   API Key: [Your Google API Key]
   Search Engine ID: [Your Custom Search Engine ID]
   ```

3. **Test Connection**
   - Click "Test Connection"
   - Verify successful response
   - Run sample search to confirm

### Google Search Configuration Options

**Search Parameters:**
```
Query Format: Natural language or keyword-based
Results per page: 10 (default), max 10
Safe search: Moderate (recommended for business)
File types: All, or specific (PDF, DOC, etc.)
Date range: Any time, past year, past month, etc.
```

**Daily Limits:**
- Free tier: 100 queries per day
- Paid tiers: Up to 10,000 queries per day
- Cost: $5 per 1,000 queries (above free limit)

## Bing Web Search API Setup

### Step 1: Microsoft Azure Account

1. **Create Azure Account**
   - Go to [Azure Portal](https://portal.azure.com)
   - Sign in with Microsoft account
   - Complete account verification

2. **Create Bing Search Resource**
   ```
   Resource Type: Bing Search v7
   Subscription: Your Azure subscription
   Resource Group: Create new "OmniProspect-Resources"
   Name: omniprospect-bing-search
   Pricing Tier: F1 (Free) or S1 (Standard)
   ```

### Step 2: Get API Key

1. **Navigate to Resource**
   - Find your Bing Search resource in Azure Portal
   - Click on the resource name

2. **Access Keys**
   ```
   Resource → Keys and Endpoint
   Copy Key 1 or Key 2
   Note the Endpoint URL
   ```

### Step 3: Configure in OmniProspect

1. **Access Settings**
   ```
   Dashboard → Settings → API Configuration → Bing Search
   ```

2. **Enter Credentials**
   ```
   API Key: [Your Bing API Key]
   Endpoint: [Your Endpoint URL]
   ```

3. **Test Connection**
   - Click "Test Connection"
   - Verify successful response

### Bing Search Configuration

**Search Parameters:**
```
Market: en-US (default), or specific locale
Safe search: Moderate, Strict, or Off
Freshness: Any, Day, Week, Month
Count: Results per query (max 50)
Offset: For pagination
```

**Daily Limits:**
- Free tier (F1): 1,000 queries per month
- Standard tier (S1): 1,000 queries per second
- Pricing: Various tiers available

## Yahoo Search Configuration

### Setup Overview
Yahoo Search uses web scraping (no API key required) with built-in compliance features.

### Configuration Steps

1. **Access Settings**
   ```
   Dashboard → Settings → Platform Integrations → Yahoo Search
   ```

2. **Configure Scraping Parameters**
   ```
   Request Delay: 2-3 seconds (recommended)
   Max Requests per Minute: 20-30
   User Agent: Rotate between browser agents
   Proxy Settings: Optional for scale
   ```

3. **Compliance Settings**
   ```
   ✅ Respect robots.txt: Enabled
   ✅ Rate limiting: Enabled
   ✅ Error handling: Enabled
   ✅ Request logging: Enabled
   ```

### Yahoo Search Best Practices

**Rate Limiting:**
- Maximum 1-2 requests per second
- Implement random delays between requests
- Monitor for rate limiting responses

**Error Handling:**
- Automatic retry with exponential backoff
- CAPTCHA detection and alerts
- IP rotation for persistent issues

## Multi-Source Search Configuration

### Search Source Priority

**Recommended Order:**
1. Google Custom Search (highest quality, official API)
2. Bing Web Search (good coverage, official API)
3. LinkedIn Search (for professional profiles)
4. Yahoo Search (supplementary results)

### Parallel Search Settings

1. **Enable Multi-Source Search**
   ```
   Dashboard → Settings → Search Configuration
   ```

2. **Configure Source Weights**
   ```
   Google: 40% weight
   Bing: 35% weight
   LinkedIn: 20% weight
   Yahoo: 5% weight
   ```

3. **Result Aggregation**
   - Enable duplicate detection
   - Set relevance thresholds
   - Configure result merging rules

## Monitoring and Analytics

### Usage Tracking

**Daily Monitoring:**
- API call counts per source
- Success/failure rates
- Response times and quality
- Compliance adherence metrics

**Weekly Reports:**
- Usage trends and patterns
- Cost analysis (for paid APIs)
- Result quality assessment
- Compliance audit summaries

### Alerts and Notifications

**Configure Alerts for:**
- Approaching daily API limits
- Failed API connections
- Compliance violations
- Unusual usage patterns

**Notification Methods:**
- Email alerts
- Dashboard notifications
- Slack/Teams integrations (if configured)

## Troubleshooting Common Issues

### Google Custom Search Issues

**Problem: "API key not valid"**
```
Solution:
1. Verify API key is correctly copied
2. Check if Custom Search API is enabled
3. Ensure API key restrictions allow your domain
4. Wait 5-10 minutes after creating new keys
```

**Problem: "Search engine not found"**
```
Solution:
1. Verify Search Engine ID is correct
2. Ensure search engine is set to "Search the entire web"
3. Check that search engine is published
```

### Bing Search Issues

**Problem: "Access denied"**
```
Solution:
1. Verify API key is active
2. Check Azure billing status
3. Ensure resource is properly configured
4. Verify endpoint URL is correct
```

### LinkedIn Issues

**Problem: "Rate limit exceeded"**
```
Solution:
1. Reduce daily search limits
2. Increase delays between requests
3. Check if multiple users are using same IP
4. Consider premium LinkedIn account
```

### Yahoo Search Issues

**Problem: "Connection timeouts"**
```
Solution:
1. Increase request timeout settings
2. Reduce request frequency
3. Check internet connectivity
4. Enable proxy rotation if available
```

## Performance Optimization

### Search Query Optimization

**Effective Query Formats:**
```
Good: "software engineer San Francisco"
Better: "senior software engineer startup San Francisco"
Best: "senior software engineer B2B SaaS startup San Francisco"
```

**Keyword Strategy:**
- Use specific job titles and seniority levels
- Include location and industry terms
- Add company size or type qualifiers
- Include contact-related keywords

### API Usage Optimization

**Google Custom Search:**
- Use specific, targeted queries
- Leverage advanced search operators
- Monitor and optimize for quality over quantity

**Bing Web Search:**
- Take advantage of higher daily limits
- Use for broad discovery searches
- Good for finding company contact pages

**LinkedIn Search:**
- Focus on high-value prospects
- Use precise filters to reduce noise
- Maximize the impact of limited daily searches

## Security and Privacy

### Data Protection

**Required Measures:**
- Encrypt API keys in database
- Use HTTPS for all communications
- Implement secure session management
- Regular security audits and updates

**Privacy Compliance:**
- Clear data usage policies
- User consent for data collection
- Data retention limits
- Right to deletion processes

### Access Control

**User Management:**
- Role-based access control
- API key access restrictions
- Usage monitoring and limits
- Audit trail maintenance

---

**Configuration Checklist:**

- [ ] LinkedIn compliance settings configured
- [ ] Google Custom Search API key and engine ID added
- [ ] Bing Web Search API key configured
- [ ] Yahoo Search scraping parameters set
- [ ] Multi-source search priorities configured
- [ ] Monitoring and alerts enabled
- [ ] Security measures implemented
- [ ] Privacy compliance verified

**Next Steps:** Review the User Guide for operational instructions and best practices.