const request = require('supertest');
const expect = require('expect');

const { app } = require('./server.js');

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((response) => {
          expect(response.body).toMatchObject({
            error: 'Page not found.',
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return a user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((response) => {
          expect(response.body).toContainEqual(
            expect.objectContaining({ name: 'Eric', age: 30 }),
          );
        })
        .end(done);
    });
  });
});
