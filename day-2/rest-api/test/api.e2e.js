const request = require('supertest');

const app = require('../server');


describe('Orders', function() {

  describe('Create 2', function() {

    it('should return error on create new order without userId', function(done) {

      request(app)
        .post('/api/v1/orders')
        .send({
          //userId: 'test',
          amount: 10,
          price: 9.99
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(422)
        .end((err, res) => {
          if (err) return done(err);

          res.body.should.have.properties({
            error: 'Parameter userId is required'
          });

          done();
        });

    });

    it('should create new order', function(done) {

      request(app)
        .post('/api/v1/orders')
        .send({
          userId: 'test-id',
          amount: 10,
          price: 9.99
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);

          res.body.should.have.properties({
            amount: 10,
            price: 9.99
          });

          done();
        });

    });

  });

  describe('Delete', function() {

    it('should return error on create new order without userId', function(done) {

      request(app)
        .post('/api/v1/orders')
        .send({
          // userId: 'test',
          amount: 10,
          price: 9.99
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(422)
        .end((err, res) => {
          if (err) return done(err);

          res.body.should.have.properties({
            error: 'Parameter userId is required'
          });

          done();
        });

    });

    it('should create new order', function(done) {

      request(app)
        .post('/api/v1/orders')
        .send({
          userId: 'test-id',
          amount: 10,
          price: 9.99
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);

          res.body.should.have.properties({
            amount: 10,
            price: 9.99
          });

          done();
        });

    });

  });

});
