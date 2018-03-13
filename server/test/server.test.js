const expect = require('expect')
const request = require('supertest')
 
const app = require('./../server')

describe('API Tests', function() {
  var birthday = {
    id: 1,
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

  describe('Delete birthday /birthdays', () => {
    it('should delete a birthday', (done) => {
      request(app)
        .delete('/birthdays/' + birthday.id)
        .send(birthday)
        .expect(200)
        .expect((res) => {
          expect(res.body.message).toEqual('Birthday successfully deleted')
        })
        .end(done)
    })
  })
})