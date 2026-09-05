const { calculateHealth } = require('./server');

describe('Application Core Logic Tests', () => {
  test('calculateHealth should return UP by default', () => {
    const health = calculateHealth();
    expect(health.status).toBe('UP');
    expect(health).toHaveProperty('uptime');
    expect(health).toHaveProperty('timestamp');
  });

  test('calculateHealth should accept custom status', () => {
    const health = calculateHealth('MAINTENANCE');
    expect(health.status).toBe('MAINTENANCE');
  });
});