const expect = require('expect')
const request = require('supertest')
 
const app = require('./../server')

describe('API Tests', function() {
  var birthday = {
    date: Date('1991-07-01T00:00:00'),
    name: 'Jane Doe'
  }

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

  describe('Create birthday /birthdays', () => {
    it('should create a birthday', (done) => {
      request(app)
        .post('/birthdays')
        .send(birthday)
        .expect(200)
        .expect((res) => {
          expect(res.body.name).toEqual('Jane Doe')
        })
        .end(done)
    })
  })

})