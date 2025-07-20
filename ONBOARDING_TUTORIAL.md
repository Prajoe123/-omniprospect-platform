# OmniProspect Onboarding Tutorial

## Welcome to OmniProspect

This tutorial will guide you through setting up and using OmniProspect for compliant lead generation. You'll learn how to configure search engines, run your first searches, and manage prospects effectively.

## What You'll Learn

By the end of this tutorial, you'll be able to:
- ✅ Configure LinkedIn and search engine integrations
- ✅ Run compliant searches across multiple sources
- ✅ Manage and organize your prospect data
- ✅ Understand compliance boundaries and best practices

## Before You Start

### Prerequisites
- Active OmniProspect account
- Basic understanding of lead generation
- Valid email address for API notifications

### Time Required
- Initial setup: 15-20 minutes
- First search tutorial: 10 minutes
- Complete onboarding: 30-45 minutes

## Tutorial 1: Dashboard Overview (5 minutes)

### Step 1: Navigate Your Dashboard

When you first log in, you'll see the main dashboard with four key sections:

1. **Platform Overview (Top Left)**
   - Shows connection status for LinkedIn, Google, Bing, and Yahoo
   - Green badges mean connected and working
   - Yellow/Red badges need attention

2. **Search Interface (Top Right)**
   - Quick search functionality
   - Multi-source search options
   - Compliance indicators

3. **Statistics Cards (Middle)**
   - Total prospects in your database
   - This month's new prospects
   - Conversion rate tracking
   - API usage monitoring

4. **Recent Activity (Bottom)**
   - Latest search results
   - Recent prospect additions
   - System notifications

### Step 2: Understanding the Status Indicators

**Platform Connection Status:**
- 🟢 **Connected**: Platform is working and configured
- 🟡 **Setup Required**: API keys needed or configuration incomplete
- 🔴 **Error**: Connection issues or exceeded limits

**Compliance Indicators:**
- Daily usage meters for each platform
- Rate limiting warnings
- Compliance score indicators

## Tutorial 2: LinkedIn Setup (10 minutes)

LinkedIn is your primary source for professional prospect data. Let's configure it for safe, compliant use.

### Step 1: Access LinkedIn Settings

1. Click **Settings** in the main navigation
2. Select **Platform Integrations**
3. Click on **LinkedIn Configuration**

### Step 2: Configure Compliance Settings

**Daily Limits:**
```
Free LinkedIn Account: Set to 80 profiles/day
Premium Account: Set to 150 profiles/day
Enterprise Account: Set to 300 profiles/day
```

**Request Timing:**
```
Delay Between Requests: 3 seconds (recommended)
Random Delay Variance: ±1 second
Daily Reset Time: 12:00 AM your timezone
```

### Step 3: Test LinkedIn Integration

1. Click **Test Connection**
2. Enter a simple search query: "marketing manager"
3. Verify results appear with compliance indicators
4. Check that rate limiting is working

**Expected Results:**
- Search completes successfully
- Results show profile information
- Compliance meter updates
- No error messages

## Tutorial 3: Google Custom Search Setup (15 minutes)

Google Custom Search provides high-quality web search results through an official API.

### Step 1: Get Google API Credentials

**Option A: Quick Setup (Using Our Guide)**
1. Follow our [Google API Setup Guide](CONFIGURATION_GUIDE.md#google-custom-search-api-setup)
2. You'll get an API key and Search Engine ID
3. This takes about 10 minutes

**Option B: Skip for Now**
- You can start with LinkedIn and Bing
- Add Google Search later
- Limited functionality without API key

### Step 2: Configure in OmniProspect

If you completed the API setup:

1. Go to **Settings** → **API Configuration** → **Google Search**
2. Enter your API Key and Search Engine ID
3. Click **Test Connection**
4. Run a test search: "tech companies San Francisco"

**Verification:**
- Connection test shows "Success"
- Sample search returns web results
- Daily quota shows 100 queries available

## Tutorial 4: Bing Search Setup (10 minutes)

Bing provides additional search coverage with higher daily limits.

### Step 1: Get Bing API Key

1. Follow our [Bing API Setup Guide](CONFIGURATION_GUIDE.md#bing-web-search-api-setup)
2. Create Microsoft Azure account (free)
3. Get Bing Search API key
4. Note: Free tier includes 1,000 queries/month

### Step 2: Configure and Test

1. **Settings** → **API Configuration** → **Bing Search**
2. Enter your API key
3. Test with query: "startup CEOs New York"
4. Verify results and quota display

## Tutorial 5: Your First Multi-Source Search (10 minutes)

Now let's run a real search across multiple platforms to find prospects.

### Step 1: Plan Your Search

**Example Target:**
- Job Title: "VP of Marketing"
- Location: "San Francisco Bay Area"
- Industry: "B2B SaaS"
- Company Size: "50-200 employees"

### Step 2: Execute the Search

1. **Navigate to Search Interface**
   - Click **Search** in main navigation
   - You'll see the multi-source search form

2. **Enter Search Parameters**
   ```
   Primary Query: "VP Marketing B2B SaaS"
   Location Filter: "San Francisco Bay Area"
   Company Size: "50-200 employees"
   ```

3. **Select Search Sources**
   - ✅ LinkedIn (for professional profiles)
   - ✅ Google (for company information)
   - ✅ Bing (for additional coverage)
   - ⏸️ Yahoo (optional, if configured)

4. **Start the Search**
   - Click **Search All Sources**
   - Watch the progress indicators
   - Monitor compliance meters

### Step 3: Review Results

**What You'll See:**
- Results organized by source
- Quality scores for each result
- Contact information (when available)
- Company details and social links

**Expected Timeline:**
- LinkedIn results: 30-60 seconds
- Google results: 10-20 seconds
- Bing results: 10-20 seconds
- Total search time: 1-2 minutes

### Step 4: Evaluate and Save

1. **Review Result Quality**
   - Check for complete contact information
   - Verify job titles match your criteria
   - Assess lead qualification

2. **Add High-Quality Prospects**
   - Click **Add to Prospects** on relevant results
   - Add custom notes and tags
   - Set follow-up priorities

## Tutorial 6: Managing Your Prospects (5 minutes)

Learn how to organize and track your prospect database.

### Step 1: Access Prospect Database

1. Click **Prospects** in main navigation
2. View your prospect list with filters
3. Use search and sort functions

### Step 2: Organize Prospects

**Use Tags for Organization:**
- Industry tags: "SaaS", "Healthcare", "Fintech"
- Status tags: "Cold", "Contacted", "Interested"
- Priority tags: "High", "Medium", "Low"

**Add Notes and Context:**
- Source of the lead
- Key talking points
- Follow-up schedule
- Contact preferences

### Step 3: Track Interactions

**Record Activities:**
- Email sent dates
- Meeting schedules
- Response status
- Next action items

## Tutorial 7: Understanding Compliance (5 minutes)

Learn the important compliance rules to keep your account safe and legal.

### Daily Limits Summary

**LinkedIn:**
- Free accounts: 100 profiles/day maximum
- Respect 2-3 second delays between requests
- Only collect public information

**Google Custom Search:**
- Free tier: 100 queries/day
- Paid tiers: Higher limits available
- Official API, fully compliant

**Bing Web Search:**
- Free tier: 1,000 queries/month
- Paid tiers: Higher limits available
- Official API, fully compliant

**Yahoo Search:**
- Web scraping with rate limiting
- 1-2 requests/second maximum
- Respects robots.txt automatically

### Compliance Best Practices

**Do's:**
- ✅ Monitor daily usage in dashboard
- ✅ Respect platform rate limits
- ✅ Use data for legitimate business purposes
- ✅ Keep prospect data secure
- ✅ Provide opt-out options in communications

**Don'ts:**
- ❌ Exceed daily platform limits
- ❌ Scrape private or personal data
- ❌ Use data for spam or harassment
- ❌ Share API keys or account access
- ❌ Ignore platform warnings or restrictions

## Tutorial 8: Advanced Features (5 minutes)

Explore powerful features for scaling your lead generation.

### Workflow Automation

**Set Up Automated Sequences:**
1. Go to **Workflows** → **Create New**
2. Choose from templates:
   - New prospect onboarding
   - Follow-up sequences
   - Data enrichment
3. Customize triggers and actions
4. Monitor performance

### Analytics and Reporting

**Track Your Performance:**
- Conversion rates by source
- Response rates by approach
- ROI analysis
- Compliance score tracking

### Data Export and Integration

**Export Options:**
- CSV for spreadsheet analysis
- JSON for custom integrations
- API access for real-time data

## Troubleshooting Common Issues

### Search Not Returning Results

**Check:**
1. Are your search terms too specific?
2. Is the API connection working?
3. Have you reached daily limits?
4. Are there typos in your query?

**Solutions:**
- Broaden search terms
- Test API connections in settings
- Check usage meters in dashboard
- Try different keyword combinations

### API Connection Errors

**Google Custom Search:**
- Verify API key is correct
- Check if Custom Search API is enabled
- Ensure search engine allows web search

**Bing Search:**
- Confirm Azure subscription is active
- Verify API key hasn't expired
- Check billing status

### Rate Limiting Warnings

**LinkedIn:**
- Reduce daily search targets
- Increase delays between requests
- Spread searches throughout the day

**Search APIs:**
- Monitor daily quotas
- Consider upgrading to paid tiers
- Use multiple sources to distribute load

## Next Steps

### Immediate Actions (Today)
1. ✅ Complete platform configurations
2. ✅ Run your first multi-source search
3. ✅ Add 5-10 prospects to your database
4. ✅ Set up basic compliance monitoring

### This Week
1. Configure workflow automation
2. Set up daily search routines
3. Organize prospect tagging system
4. Review and optimize search queries

### This Month
1. Analyze performance metrics
2. Optimize search strategies
3. Scale up daily search volume
4. Integrate with CRM or email tools

## Getting Help

### Documentation Resources
- [User Guide](USER_GUIDE.md) - Complete feature documentation
- [Configuration Guide](CONFIGURATION_GUIDE.md) - Detailed setup instructions
- [Compliance Guidelines](../COMPLIANCE_GUIDELINES.md) - Legal and safety rules

### Support Channels
- Help Center: Built-in documentation and FAQs
- Video Tutorials: Step-by-step visual guides
- Email Support: Technical assistance
- Compliance Training: Best practice workshops

### Community Resources
- User forums for tips and strategies
- Case studies and success stories
- Industry-specific guides
- Regular webinars and training sessions

---

## Completion Checklist

Mark each item as you complete your onboarding:

**Setup Tasks:**
- [ ] Dashboard familiarization complete
- [ ] LinkedIn integration configured and tested
- [ ] Google Custom Search API set up (optional)
- [ ] Bing Search API set up (optional)
- [ ] Yahoo Search configured (optional)

**First Search:**
- [ ] Multi-source search executed successfully
- [ ] Results reviewed and evaluated
- [ ] High-quality prospects added to database
- [ ] Compliance monitoring verified

**Organization:**
- [ ] Prospect tagging system created
- [ ] Notes and context added to prospects
- [ ] Follow-up schedule established
- [ ] Workflow automation configured (optional)

**Compliance:**
- [ ] Daily limits understood and configured
- [ ] Compliance best practices reviewed
- [ ] Usage monitoring set up
- [ ] Terms of service acknowledged

**Welcome to OmniProspect! You're now ready to generate compliant, high-quality leads efficiently and safely.**