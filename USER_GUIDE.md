# OmniProspect User Guide

## Overview

OmniProspect is a compliance-focused lead generation platform that helps you find and manage prospects through LinkedIn and search engines while staying within platform guidelines and legal boundaries.

## Supported Sources

### 🔗 LinkedIn (Public Profiles)
- **What it does**: Searches public LinkedIn profiles for potential leads
- **Compliance limit**: Under 100 profiles per day (free accounts)
- **Data collected**: Name, headline, company, location, public posts
- **Setup required**: None - built-in scraping with rate limiting

### 🌐 Google Custom Search API
- **What it does**: Searches the web using Google's official API
- **Daily limit**: 100 queries per day (free tier)
- **Data collected**: Web search results, company information, contact details
- **Setup required**: Google API key and Custom Search Engine ID

### 🔍 Bing Web Search API
- **What it does**: Searches the web using Microsoft's official API
- **Daily limit**: 1,000 queries per day (standard tier)
- **Data collected**: Web search results, business information
- **Setup required**: Microsoft Azure API key

### 📍 Yahoo Search (Web Scraping)
- **What it does**: Scrapes Yahoo search results (respects robots.txt)
- **Rate limit**: 1-2 requests per second maximum
- **Data collected**: Search results and public business information
- **Setup required**: Configuration in platform settings

## Getting Started

### Step 1: Initial Setup

1. **Access the Dashboard**
   - Navigate to your OmniProspect dashboard
   - Review the platform overview to see connection status

2. **Configure API Keys** (Optional but recommended)
   - Go to Settings > API Configuration
   - Add your Google Custom Search API key and Search Engine ID
   - Add your Bing Web Search API key
   - Test connections to ensure they're working

### Step 2: Understanding Compliance

**Important Compliance Rules:**
- ✅ Only scrape publicly available information
- ✅ Respect daily rate limits for each platform
- ✅ Use data for legitimate business purposes only
- ❌ Never scrape private or personal data
- ❌ Don't exceed platform rate limits
- ❌ Don't use data for spam or harassment

### Step 3: Your First Search

1. **Navigate to Search Interface**
   - Click "Search" in the main navigation
   - Choose your search source(s)

2. **Enter Search Query**
   ```
   Example queries:
   - "software engineers in San Francisco"
   - "marketing directors at tech companies"
   - "CEOs of startups in Austin"
   ```

3. **Apply Filters** (if available)
   - Location: Specify geographic area
   - Company size: Filter by organization size
   - Industry: Target specific business sectors
   - Job title: Search for specific roles

4. **Execute Search**
   - Click "Search" to run your query
   - Monitor progress and compliance indicators
   - Review results as they appear

## Platform-Specific Guides

### LinkedIn Search Best Practices

**Compliance Guidelines:**
- **Daily Limit**: Stay under 100 profiles per day for free accounts
- **Timing**: Space requests 2-3 seconds apart minimum
- **Data Use**: Only collect public profile information

**Effective Search Strategies:**
1. **Use Specific Keywords**
   ```
   Good: "Product Manager at SaaS companies"
   Better: "Senior Product Manager at B2B SaaS startups"
   ```

2. **Location Targeting**
   ```
   Examples:
   - "Software Engineers in Bay Area"
   - "Marketing Directors in New York"
   ```

3. **Industry Focus**
   ```
   Examples:
   - "CTOs at fintech companies"
   - "Sales VPs in healthcare"
   ```

**What You'll Get:**
- Full name and professional headline
- Current company and position
- Location information
- Public skills and endorsements
- Recent activity (if public)

### Google Custom Search Setup

**Step 1: Get API Credentials**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Custom Search API
4. Create credentials (API key)
5. Note down your API key

**Step 2: Create Custom Search Engine**
1. Visit [Google Custom Search](https://cse.google.com)
2. Click "Add" to create new search engine
3. Enter "www.example.com" as initial site (we'll modify this)
4. Create the search engine
5. Go to "Setup" > "Basics"
6. Remove "www.example.com" and enable "Search the entire web"
7. Note down your Search Engine ID

**Step 3: Configure in OmniProspect**
1. Go to Settings > API Configuration
2. Enter your Google API key
3. Enter your Custom Search Engine ID
4. Test the connection

**Search Tips:**
- Use specific business terms for better results
- Combine location and industry keywords
- Include contact-related terms like "email" or "contact"

### Bing Web Search Setup

**Step 1: Get API Key**
1. Go to [Microsoft Azure Portal](https://portal.azure.com)
2. Create a Bing Search v7 resource
3. Get your API key from the resource page

**Step 2: Configure in OmniProspect**
1. Go to Settings > API Configuration
2. Enter your Bing API key
3. Test the connection

**Search Benefits:**
- Higher daily limits (1,000 queries/day)
- Good for finding business contact information
- Complements Google search results

### Yahoo Search Configuration

**Setup Notes:**
- No API key required (web scraping)
- Automatically respects robots.txt
- Built-in rate limiting for compliance

**Best Practices:**
- Use for supplementary searches
- Combine with other search sources
- Monitor for any access issues

## Managing Your Prospects

### Viewing Search Results

**Results Dashboard:**
- View all search results in organized lists
- Filter by source, date, and relevance
- Export results to CSV or Excel

**Individual Prospect Cards:**
- Complete profile information
- Contact details (when available)
- Source attribution and compliance notes
- Interaction history

### Converting Results to Prospects

1. **Review Search Results**
   - Check data quality and completeness
   - Verify contact information
   - Assess lead qualification

2. **Add to Prospect Database**
   - Click "Add to Prospects" on relevant results
   - Add custom notes and tags
   - Set follow-up reminders

3. **Organize and Track**
   - Use tags for categorization
   - Track interaction status
   - Monitor conversion rates

## Compliance Monitoring

### Built-in Safeguards

**Rate Limiting:**
- Automatic enforcement of daily limits
- Visual indicators of usage levels
- Warnings before reaching limits

**Data Quality:**
- Source attribution for all data
- Compliance scoring for each result
- Automatic filtering of invalid data

### Usage Analytics

**Daily Tracking:**
- Monitor API usage across all platforms
- Track prospect generation rates
- Review compliance adherence

**Monthly Reports:**
- Detailed usage summaries
- ROI analysis and conversion tracking
- Compliance audit trails

## Troubleshooting

### Common Issues

**API Connection Problems:**
1. Verify API keys are correct
2. Check if you've exceeded daily limits
3. Ensure billing is set up for paid APIs
4. Test connection from settings page

**Low Search Results:**
1. Broaden your search terms
2. Try different keyword combinations
3. Use multiple search sources
4. Check if you're being too specific

**Rate Limiting Warnings:**
1. Monitor your daily usage in the dashboard
2. Spread searches throughout the day
3. Consider upgrading to premium API tiers
4. Use multiple search sources to diversify load

### Support Resources

**Documentation:**
- API setup guides for each platform
- Compliance best practices
- Advanced search techniques

**Help Center:**
- Video tutorials for setup and configuration
- Compliance training materials
- Troubleshooting guides

## Advanced Features

### Workflow Automation

**Create Automated Sequences:**
1. Go to Workflow Builder
2. Design your prospect journey
3. Set triggers and actions
4. Monitor automation performance

**Popular Workflow Templates:**
- New prospect onboarding
- Follow-up sequences
- Data enrichment processes
- Compliance checking routines

### Data Export and Integration

**Export Options:**
- CSV files for spreadsheet analysis
- JSON for custom integrations
- API access for real-time data

**Integration Capabilities:**
- CRM system connections
- Email marketing platforms
- Sales automation tools

## Legal and Compliance Notes

**Data Privacy:**
- All data collection follows GDPR and CCPA guidelines
- Users can request data deletion
- Clear consent and usage policies

**Platform Compliance:**
- Strict adherence to LinkedIn's terms of service
- Official API usage for Google and Bing
- Respectful web scraping for Yahoo

**User Responsibilities:**
- Use data for legitimate business purposes only
- Respect recipient privacy and preferences
- Follow all applicable laws and regulations

---

**Need Help?**
- Check our FAQ section for common questions
- Contact support for technical assistance
- Review compliance guidelines for best practices