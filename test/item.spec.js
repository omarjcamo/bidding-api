import chai from 'chai';
import mongoose from 'mongoose';
import { Mockgoose } from 'mockgoose';
import chaiHttp from 'chai-http';
import server from '../src/server';
import config from '../src/config/config';

const mockgoose = new Mockgoose(mongoose);

chai.should();
chai.use(chaiHttp);

/**
 * Add mockTodo into storage
 */
function addItemToStorage(name, cb) {
  chai
    .request(server)
    .post('/api/v1/item')
    .send({ name })
    .end((err, res) => {
      if (cb) {
        cb(err, res);
      }
    });
}

describe('Items', () => {
  before(done => {
    mongoose.disconnect();
    mockgoose.helper.reset();
    mockgoose.prepareStorage().then(() => {
      mongoose.connect(
        config.db,
        err => {
          done(err);
        }
      );
    });
  });

  describe('/GET item', () => {
    it('it should get a empty list of items', done => {
      chai
        .request(server)
        .get('/api/v1/item')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array').with.lengthOf(0);
          done();
        });
    });

    it('it should get a list of items', done => {
      addItemToStorage('Mock Item', (err, res) => {
        chai
          .request(server)
          .get('/api/v1/item')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array').with.lengthOf(1);
            res.body.should.to.deep.equal([res.body[0]]);
            done();
          });
      });
    });
  });

  describe('/POST item', () => {
    it('should create an item with a name and starting price property', done => {
      const payload = { name: 'Just another item', startingPrice: 100 };
      chai
        .request(server)
        .post('/api/v1/item')
        .send(payload)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql(payload.name);
          res.body.should.have.property('startingPrice').eql(payload.startingPrice);
          res.body.should.have.property('completed').eql(false);
          done();
        });
    });

    it('should not create an item with a missing name property', done => {
      chai
        .request(server)
        .post('/api/v1/item')
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
    });
  });

  describe('/PUT item/:id', () => {
    let itemMock;

    before(done => {
      addItemToStorage('Mock Item Name for Modification', (err, res) => {
        itemMock = res.body;
        done();
      });
    });

    it('should update an item', done => {
      const update = {
        name: 'Renamed Item',
        completed: true
      };

      chai
        .request(server)
        .put('/api/v1/item/' + itemMock._id)
        .send(update)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should return a 422 status if body is missing', done => {
      chai
        .request(server)
        .put('/api/v1/item/' + itemMock._id)
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
    });

    it('should return a 422 status if id is wrong', done => {
      chai
        .request(server)
        .put('/api/v1/item/A-WRONG-ID')
        .send({ name: 'Test' })
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
    });
  });

  describe('/DELETE item/:id', () => {
    let itemMock;

    before(done => {
      addItemToStorage('Mock Item Name to delete', (err, res) => {
        itemMock = res.body;
        done();
      });
    });

    it('should delete a item', done => {
      chai
        .request(server)
        .delete('/api/v1/item/' + itemMock._id)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should return a 422 status if id is wrong', done => {
      chai
        .request(server)
        .put('/api/v1/item/A-WRONG-ID')
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
    });
  });
});
