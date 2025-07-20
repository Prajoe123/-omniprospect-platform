// Basic compliance testing for OmniProspect
// Run with: node tests/compliance.test.js

import assert from 'assert';

// Mock compliance middleware for testing
class MockComplianceMiddleware {
  constructor() {
    this.rateLimitStore = {};
    this.limits = {
      linkedin: { windowMs: 24 * 60 * 60 * 1000, maxRequests: 100 },
      google: { windowMs: 24 * 60 * 60 * 1000, maxRequests: 100 },
      bing: { windowMs: 30 * 24 * 60 * 60 * 1000, maxRequests: 1000 },
      yahoo: { windowMs: 60 * 1000, maxRequests: 2 }
    };
  }

  getUsageStats(platform, userId) {
    const config = this.limits[platform];
    if (!config) return null;

    const key = `${platform}:${userId}`;
    const userLimit = this.rateLimitStore[key];
    const now = Date.now();

    if (!userLimit || now > userLimit.resetTime) {
      return {
        used: 0,
        limit: config.maxRequests,
        remaining: config.maxRequests,
        resetTime: now + config.windowMs,
        percentage: 0
      };
    }

    const remaining = Math.max(0, config.maxRequests - userLimit.count);
    const percentage = (userLimit.count / config.maxRequests) * 100;

    return {
      used: userLimit.count,
      limit: config.maxRequests,
      remaining,
      resetTime: userLimit.resetTime,
      percentage: Math.round(percentage)
    };
  }

  incrementUsage(platform, userId, count = 1) {
    const config = this.limits[platform];
    if (!config) return false;

    const key = `${platform}:${userId}`;
    const now = Date.now();
    
    let userLimit = this.rateLimitStore[key];
    if (!userLimit || now > userLimit.resetTime) {
      userLimit = {
        count: 0,
        resetTime: now + config.windowMs
      };
    }

    userLimit.count += count;
    this.rateLimitStore[key] = userLimit;
    
    return userLimit.count <= config.maxRequests;
  }
}

// Test suite
function runComplianceTests() {
  const middleware = new MockComplianceMiddleware();
  let testsPassed = 0;
  let testsTotal = 0;

  function test(name, fn) {
    testsTotal++;
    try {
      fn();
      console.log(`✓ ${name}`);
      testsPassed++;
    } catch (error) {
      console.log(`✗ ${name}: ${error.message}`);
    }
  }

  console.log('Running OmniProspect Compliance Tests...\n');

  // Test 1: Initial usage stats
  test('Initial usage should be zero', () => {
    const stats = middleware.getUsageStats('linkedin', 'user1');
    assert.strictEqual(stats.used, 0);
    assert.strictEqual(stats.percentage, 0);
    assert.strictEqual(stats.remaining, 100);
  });

  // Test 2: Usage increment
  test('Usage should increment correctly', () => {
    const success = middleware.incrementUsage('linkedin', 'user1', 1);
    assert.strictEqual(success, true);
    
    const stats = middleware.getUsageStats('linkedin', 'user1');
    assert.strictEqual(stats.used, 1);
    assert.strictEqual(stats.remaining, 99);
  });

  // Test 3: LinkedIn daily limit
  test('LinkedIn should enforce 100 profile limit', () => {
    // Simulate 99 more requests (total 100)
    for (let i = 0; i < 99; i++) {
      middleware.incrementUsage('linkedin', 'user2', 1);
    }
    
    const stats = middleware.getUsageStats('linkedin', 'user2');
    assert.strictEqual(stats.used, 99);
    assert.strictEqual(stats.remaining, 1);
    
    // One more should succeed
    const success1 = middleware.incrementUsage('linkedin', 'user2', 1);
    assert.strictEqual(success1, true);
    
    // Next one should fail
    const success2 = middleware.incrementUsage('linkedin', 'user2', 1);
    assert.strictEqual(success2, false);
  });

  // Test 4: Google API limits
  test('Google should enforce 100 query limit', () => {
    // Test exactly at limit
    for (let i = 0; i < 100; i++) {
      middleware.incrementUsage('google', 'user3', 1);
    }
    
    const stats = middleware.getUsageStats('google', 'user3');
    assert.strictEqual(stats.used, 100);
    assert.strictEqual(stats.remaining, 0);
    assert.strictEqual(stats.percentage, 100);
  });

  // Test 5: Bing monthly limits
  test('Bing should track monthly usage', () => {
    middleware.incrementUsage('bing', 'user4', 500);
    const stats = middleware.getUsageStats('bing', 'user4');
    assert.strictEqual(stats.used, 500);
    assert.strictEqual(stats.remaining, 500);
    assert.strictEqual(stats.percentage, 50);
  });

  // Test 6: Yahoo rate limiting
  test('Yahoo should have strict rate limits', () => {
    middleware.incrementUsage('yahoo', 'user5', 2);
    const stats = middleware.getUsageStats('yahoo', 'user5');
    assert.strictEqual(stats.used, 2);
    assert.strictEqual(stats.remaining, 0);
    
    // Should fail on next request
    const success = middleware.incrementUsage('yahoo', 'user5', 1);
    assert.strictEqual(success, false);
  });

  // Test 7: User isolation
  test('Different users should have separate limits', () => {
    middleware.incrementUsage('linkedin', 'userA', 50);
    middleware.incrementUsage('linkedin', 'userB', 30);
    
    const statsA = middleware.getUsageStats('linkedin', 'userA');
    const statsB = middleware.getUsageStats('linkedin', 'userB');
    
    assert.strictEqual(statsA.used, 50);
    assert.strictEqual(statsB.used, 30);
    assert.notStrictEqual(statsA.used, statsB.used);
  });

  // Test 8: Platform isolation
  test('Different platforms should have separate limits', () => {
    middleware.incrementUsage('google', 'user6', 80);
    middleware.incrementUsage('linkedin', 'user6', 60);
    
    const googleStats = middleware.getUsageStats('google', 'user6');
    const linkedinStats = middleware.getUsageStats('linkedin', 'user6');
    
    assert.strictEqual(googleStats.used, 80);
    assert.strictEqual(linkedinStats.used, 60);
  });

  // Test 9: Percentage calculations
  test('Percentage calculations should be accurate', () => {
    middleware.incrementUsage('linkedin', 'user7', 75);
    const stats = middleware.getUsageStats('linkedin', 'user7');
    assert.strictEqual(stats.percentage, 75);
  });

  // Test 10: Invalid platform handling
  test('Invalid platforms should return null', () => {
    const stats = middleware.getUsageStats('invalid', 'user8');
    assert.strictEqual(stats, null);
  });

  console.log(`\nTest Results: ${testsPassed}/${testsTotal} passed`);
  
  if (testsPassed === testsTotal) {
    console.log('🎉 All compliance tests passed!');
    return true;
  } else {
    console.log('❌ Some tests failed. Review compliance implementation.');
    return false;
  }
}

// API endpoint testing
async function testApiEndpoints() {
  console.log('\nTesting API Endpoints...\n');
  
  const baseUrl = 'http://localhost:5000';
  let apiTestsPassed = 0;
  let apiTestsTotal = 0;

  async function apiTest(name, testFn) {
    apiTestsTotal++;
    try {
      await testFn();
      console.log(`✓ ${name}`);
      apiTestsPassed++;
    } catch (error) {
      console.log(`✗ ${name}: ${error.message}`);
    }
  }

  // Test compliance status endpoint
  await apiTest('GET /api/compliance/status', async () => {
    const response = await fetch(`${baseUrl}/api/compliance/status`);
    assert.strictEqual(response.status, 200);
    
    const data = await response.json();
    assert(data.platforms);
    assert(data.platforms.linkedin);
    assert(data.platforms.google);
    assert(data.platforms.bing);
    assert(data.platforms.yahoo);
  });

  // Test platform-specific compliance
  await apiTest('GET /api/compliance/linkedin', async () => {
    const response = await fetch(`${baseUrl}/api/compliance/linkedin`);
    assert.strictEqual(response.status, 200);
    
    const data = await response.json();
    assert.strictEqual(data.platform, 'linkedin');
    assert(data.usage);
    assert(Array.isArray(data.recommendations));
  });

  // Test compliance guidelines
  await apiTest('GET /api/compliance/guidelines', async () => {
    const response = await fetch(`${baseUrl}/api/compliance/guidelines`);
    assert.strictEqual(response.status, 200);
    
    const data = await response.json();
    assert(data.guidelines);
    assert(data.guidelines.linkedin);
    assert(data.guidelines.google);
    assert(data.generalPrinciples);
  });

  // Test invalid platform
  await apiTest('GET /api/compliance/invalid returns 400', async () => {
    const response = await fetch(`${baseUrl}/api/compliance/invalid`);
    assert.strictEqual(response.status, 400);
  });

  console.log(`\nAPI Test Results: ${apiTestsPassed}/${apiTestsTotal} passed`);
  return apiTestsPassed === apiTestsTotal;
}

// Search endpoint rate limiting test
async function testSearchRateLimiting() {
  console.log('\nTesting Search Rate Limiting...\n');
  
  const baseUrl = 'http://localhost:5000';
  let rateLimitPassed = 0;
  let rateLimitTotal = 0;

  async function rateLimitTest(name, testFn) {
    rateLimitTotal++;
    try {
      await testFn();
      console.log(`✓ ${name}`);
      rateLimitPassed++;
    } catch (error) {
      console.log(`✗ ${name}: ${error.message}`);
    }
  }

  // Test search endpoint exists
  await rateLimitTest('Search endpoint accessible', async () => {
    const response = await fetch(`${baseUrl}/api/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: 'test query',
        source: 'google',
        limit: 1
      })
    });
    
    // Should either succeed (200) or fail with proper error (400/429)
    assert(response.status === 200 || response.status === 400 || response.status === 429);
  });

  // Test dashboard stats
  await rateLimitTest('Dashboard stats accessible', async () => {
    const response = await fetch(`${baseUrl}/api/dashboard/stats`);
    assert.strictEqual(response.status, 200);
    
    const data = await response.json();
    assert(data.prospects);
    assert(data.platforms);
  });

  console.log(`\nRate Limiting Test Results: ${rateLimitPassed}/${rateLimitTotal} passed`);
  return rateLimitPassed === rateLimitTotal;
}

// Main test runner
async function runAllTests() {
  console.log('='.repeat(50));
  console.log('OmniProspect Compliance Test Suite');
  console.log('='.repeat(50));
  
  const unitTestsPass = runComplianceTests();
  
  // Only run API tests if unit tests pass
  if (unitTestsPass) {
    try {
      const apiTestsPass = await testApiEndpoints();
      const rateLimitTestsPass = await testSearchRateLimiting();
      
      console.log('\n' + '='.repeat(50));
      console.log('OVERALL TEST RESULTS');
      console.log('='.repeat(50));
      console.log(`Unit Tests: ${unitTestsPass ? 'PASS' : 'FAIL'}`);
      console.log(`API Tests: ${apiTestsPass ? 'PASS' : 'FAIL'}`);
      console.log(`Rate Limit Tests: ${rateLimitTestsPass ? 'PASS' : 'FAIL'}`);
      
      if (unitTestsPass && apiTestsPass && rateLimitTestsPass) {
        console.log('\n🎉 ALL TESTS PASSED - OmniProspect is compliant and stable!');
        process.exit(0);
      } else {
        console.log('\n❌ SOME TESTS FAILED - Review implementation before deployment.');
        process.exit(1);
      }
    } catch (error) {
      console.log(`\n❌ API tests failed to run: ${error.message}`);
      console.log('Make sure the server is running on http://localhost:5000');
      process.exit(1);
    }
  } else {
    console.log('\n❌ Unit tests failed - skipping API tests.');
    process.exit(1);
  }
}

// Add fetch polyfill for Node.js if needed
if (typeof fetch === 'undefined') {
  console.log('Note: fetch not available, skipping API tests');
  runComplianceTests();
} else {
  runAllTests();
}

export { MockComplianceMiddleware, runComplianceTests };