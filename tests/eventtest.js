const request = require('supertest');
const app = require('../app');

test('GET /events', async () => {
  const res = await request(app).get('/events');
  expect(res.statusCode).toBe(200);
});