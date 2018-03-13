const expect = require('expect')
const request = require('supertest')
 
const app = require('./../server')

describe('GET /birthdays', () => {
    it('should get all birthdays', (done) => {
      request(app)
        .get('/birthdays')
        .expect(200)
        .expect((res) => {
          expect(res.body.length).toBeGreaterThan(0)
        })
        .end(done)
    })
  })