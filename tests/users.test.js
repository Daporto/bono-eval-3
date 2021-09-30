const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
  it('Should response My users route', async () => {
    const response = await request(app).get('/users');
    expect(response.body.data).toBe('My users route');
  });
});