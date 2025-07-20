# Frequently Asked Questions (FAQ)

## General Questions

### What is OmniProspect?
OmniProspect is a compliance-focused lead generation platform that helps you find and manage prospects through LinkedIn and search engines (Google, Bing, Yahoo) while staying within platform guidelines and legal boundaries.

### What makes OmniProspect different from other lead generation tools?
- **Compliance-First Design**: Built with strict adherence to platform terms of service
- **Multi-Source Integration**: Combines LinkedIn with official search APIs
- **Transparent Rate Limiting**: Clear usage indicators and automatic compliance enforcement
- **Legal Safety**: Comprehensive compliance guidelines and monitoring

### What platforms does OmniProspect support?
- **LinkedIn**: Public profile scraping with rate limiting
- **Google Custom Search**: Official API integration
- **Bing Web Search**: Microsoft's official API
- **Yahoo Search**: Compliant web scraping with robots.txt respect

## Setup and Configuration

### How long does initial setup take?
- **Basic setup**: 5-10 minutes (LinkedIn only)
- **Full setup with APIs**: 20-30 minutes (includes Google and Bing)
- **Complete onboarding**: 45 minutes (including first searches and tutorials)

### Do I need to pay for API access?
**Free Options:**
- LinkedIn: Built-in scraping (under 100 profiles/day)
- Google Custom Search: 100 queries/day free
- Bing Search: 1,000 queries/month free
- Yahoo Search: No cost (web scraping)

**Paid Upgrades:**
- Google: $5 per 1,000 additional queries
- Bing: Various Azure pricing tiers
- LinkedIn Premium: Higher daily limits (optional)

### What API keys do I need?
**Required:**
- None - you can start with LinkedIn and Yahoo immediately

**Optional but Recommended:**
- Google Custom Search API key + Search Engine ID
- Microsoft Azure Bing Search API key

### How do I get Google Custom Search API credentials?
1. Create Google Cloud account (free)
2. Enable Custom Search API
3. Create API key with restrictions
4. Set up Custom Search Engine for web search
5. Follow our [detailed guide](CONFIGURATION_GUIDE.md#google-custom-search-api-setup)

### How do I get Bing Search API credentials?
1. Create Microsoft Azure account (free)
2. Create Bing Search v7 resource
3. Get API key from resource dashboard
4. Follow our [setup guide](CONFIGURATION_GUIDE.md#bing-web-search-api-setup)

## Usage and Features

### How many prospects can I find per day?
**LinkedIn:**
- Free accounts: Up to 100 profiles/day (recommended: 60-80)
- Premium accounts: Higher limits based on subscription

**Search APIs:**
- Google: 100 free queries/day
- Bing: ~33 free queries/day (1,000/month)
- Yahoo: No specific limit (rate limited for compliance)

### What information can I collect?
**LinkedIn (Public Data Only):**
- Name, headline, current company and role
- Location, industry, experience level
- Public posts and activity
- Skills and endorsements (if visible)

**Search Engines:**
- Company contact information
- Website and social media links
- News and press releases
- Team and about pages

### How accurate is the prospect data?
**Data Quality Varies by Source:**
- LinkedIn: High accuracy for professional data
- Google/Bing: Good for company information
- Contact details: Varies, requires verification

**Quality Improvement Tips:**
- Use specific search terms
- Cross-reference multiple sources
- Verify contact information before outreach
- Focus on recently updated profiles

### Can I export my prospect data?
Yes, multiple export options:
- **CSV**: For spreadsheet analysis
- **JSON**: For custom integrations
- **API**: Real-time data access
- **CRM Integration**: Direct export to sales tools

## Compliance and Legal

### Is OmniProspect legal to use?
Yes, when used properly:
- Only collects publicly available information
- Respects platform terms of service
- Uses official APIs where available
- Implements rate limiting and compliance monitoring

### What are the compliance rules I need to follow?
**LinkedIn:**
- Stay under 100 profiles/day for free accounts
- Only scrape public information
- Respect 2-3 second delays between requests
- Don't use data for spam or harassment

**Search Engines:**
- Google/Bing: Official APIs, fully compliant
- Yahoo: Web scraping with robots.txt respect
- All: Respect rate limits and usage policies

### What happens if I exceed rate limits?
**Automatic Protection:**
- Built-in rate limiting prevents violations
- Dashboard warnings before reaching limits
- Automatic pausing when limits approached
- Daily reset at midnight your timezone

**If Limits Are Exceeded:**
- Platform may temporarily block access
- Account warnings or restrictions possible
- OmniProspect provides guidance for resolution
- Appeals process available for false positives

### Can I use this data for email marketing?
**Requirements for Compliance:**
- Only contact prospects for legitimate business purposes
- Provide clear unsubscribe options
- Respect CAN-SPAM, GDPR, and local laws
- Don't use for mass marketing or spam

**Best Practices:**
- Personalize all outreach
- Lead with value, not sales pitch
- Respect recipient preferences
- Track and honor opt-out requests

## Technical Questions

### What browsers are supported?
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (limited functionality)

### Do I need to install any software?
No, OmniProspect is entirely web-based:
- Access through any modern browser
- No downloads or installations required
- Works on Windows, Mac, and Linux
- Cloud-based data storage

### How is my data stored and protected?
**Security Measures:**
- HTTPS encryption for all communications
- Secure cloud storage with backup
- Regular security audits and updates
- SOC 2 compliance for enterprise accounts

**Data Privacy:**
- Your data is never shared with third parties
- Clear data retention policies
- Right to deletion and data export
- GDPR and CCPA compliant

### Can I integrate with my CRM?
**Supported Integrations:**
- Salesforce (via API or CSV import)
- HubSpot (direct integration available)
- Pipedrive (API integration)
- Custom integrations via REST API

**Integration Options:**
- Real-time API connections
- Scheduled data synchronization
- Manual CSV exports and imports
- Webhook notifications for new prospects

## Troubleshooting

### Why am I not getting search results?
**Common Issues:**
1. **Search terms too specific**: Try broader keywords
2. **API connection problems**: Check settings and test connections
3. **Rate limits reached**: Check usage meters in dashboard
4. **Network connectivity**: Verify internet connection

**Solutions:**
- Broaden search criteria
- Test API connections in settings
- Wait for daily limit reset
- Contact support if issues persist

### My API keys aren't working. What should I do?
**Google Custom Search:**
1. Verify API key is correctly copied
2. Check if Custom Search API is enabled in Google Cloud
3. Ensure search engine is set to "Search the entire web"
4. Wait 5-10 minutes after creating new keys

**Bing Search:**
1. Confirm Azure subscription is active
2. Verify API key hasn't expired
3. Check billing and usage limits
4. Ensure endpoint URL is correct

### Why are some prospects missing contact information?
**Common Reasons:**
- Information not publicly available
- Privacy settings restrict access
- Contact details not indexed by search engines
- Data needs cross-reference verification

**Solutions:**
- Use multiple search sources
- Check company websites directly
- Try social media profile links
- Use email pattern matching techniques

### The platform seems slow. How can I improve performance?
**Optimization Tips:**
1. **Use specific search terms**: Reduces processing time
2. **Search one source at a time**: For large queries
3. **Clear browser cache**: If experiencing loading issues
4. **Check internet connection**: Ensure stable connectivity

**When to Contact Support:**
- Persistent loading issues
- Error messages that persist
- Unusual behavior or responses
- Account access problems

## Billing and Account

### How much does OmniProspect cost?
**Free Tier:**
- LinkedIn scraping (100 profiles/day)
- Google Custom Search (100 queries/day free tier)
- Bing Search (1,000 queries/month free tier)
- Yahoo Search (no additional cost)
- Basic support and documentation

**Paid Plans:**
- Professional: Enhanced features and support
- Enterprise: Advanced integrations and compliance
- Custom: Tailored solutions for large organizations

### What payment methods do you accept?
- Credit cards (Visa, MasterCard, American Express)
- PayPal
- Bank transfers (enterprise accounts)
- Cryptocurrency (select plans)

### Can I cancel my subscription at any time?
Yes:
- Cancel anytime with no penalties
- Retain access until end of billing period
- Export all data before cancellation
- No long-term contracts required

### Do you offer refunds?
**Refund Policy:**
- 30-day money-back guarantee for new accounts
- Pro-rated refunds for service issues
- No refunds for API usage costs (third-party charges)
- Contact support for specific situations

## Getting Help

### How can I get support?
**Support Channels:**
- **Help Center**: Built-in documentation and tutorials
- **Email Support**: Technical assistance and account help
- **Video Tutorials**: Step-by-step visual guides
- **Community Forum**: User tips and best practices

**Response Times:**
- Free accounts: 48-72 hours
- Paid accounts: 24-48 hours
- Enterprise accounts: 12-24 hours
- Critical issues: Same business day

### Where can I find tutorials and training?
**Documentation:**
- [User Guide](USER_GUIDE.md): Complete feature documentation
- [Configuration Guide](CONFIGURATION_GUIDE.md): Setup instructions
- [Onboarding Tutorial](ONBOARDING_TUTORIAL.md): Step-by-step getting started
- [Best Practices](BEST_PRACTICES.md): Advanced strategies and tips

**Training Resources:**
- Video tutorial library
- Webinar series (monthly)
- Compliance training workshops
- Industry-specific guides

### Can I request new features?
Yes! We actively consider user feedback:
- Submit feature requests through support
- Vote on community-requested features
- Beta testing programs for new functionality
- Custom development for enterprise clients

### What if I need help with compliance?
**Compliance Support:**
- Detailed compliance guidelines and training
- Regular updates on platform policy changes
- Best practice workshops and webinars
- Legal consultation referrals (enterprise accounts)

**Compliance Resources:**
- Platform-specific compliance guides
- Industry regulation summaries
- Risk assessment tools
- Audit trail and reporting features

---

**Still have questions?** Contact our support team or check our comprehensive documentation for more detailed information.