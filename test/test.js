process.env.NODE_ENV = 'test';
const users = require('../server/models/users');

//Require the dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js');
const should = chai.should();

chai.use(chaiHttp);

describe('status 200', () => {
      it('it should POST a  user', (done) => {
        const user = {
            username: "oooooooooooo",
            email: "akiiii30@gmail.com",
            password: "ewa"
        }
        chai.request(app)
            .post('/api/users/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('You are registered Successfully');
              done();
            });
      });

  });

describe('status 400', () => {
      it('it should POST a  user', (done) => {
        const user = {
            username: "oooooooooooo",
            email: "akiiiiiiii30@gmail.com",
            password: "ewa"
        }
        chai.request(app)
            .post('/api/users/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Username already exist');
              done();
            });
      });

  });

describe('status 400', () => {
      it('it should POST a  user', (done) => {
        const user = {
            username: "oooooooooooooooooooooooooo",
            email: "akiiii30@gmail.com",
            password: "ewa"
        }
        chai.request(app)
            .post('/api/users/signup')
            .send(user)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('email already exist');
              done();
            });
      });

  });

 describe('status 201', () => {
    it('successfully logged in', (done) => {
      const user = {
        username: 'oooooooooooo',
        password: 'ewa'
      };
      chai.request(app)
        .post('/api/users/signin')
          .send(user)
          .end((err, res) => {
            res.status.should.equal(201);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('logged in successfully');
            done();
          });

    });
});

describe('status 404', () => {
    it('throws error for invalid user', (done) => {
      const user = {
        username: 'hhhhhhhhhhhhhhhhhhhhhhhhh',
        password: 'ewa'
      };
      chai.request(app)
        .post('/api/users/signin')
          .send(user)
          .end((err, res) => {
            res.status.should.equal(404);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('User not found');
            done();
          });
    });
});
