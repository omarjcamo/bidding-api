import Q from 'q';
import Bid from './bid.model';

export default {
  getAll,
  update,
  create,
  remove
};

function getAll() {
  const deferred = Q.defer();

  Bid.find({}, (err, bids) => {
    if (err) deferred.reject(err);
    deferred.resolve(bids);
  });

  return deferred.promise;
}

function update(id, data) {
  const deferred = Q.defer();

  // @TODO: Potentially control what is in data to be updated

  if (Object.keys(data).length > 0) {
    Bid.update({ _id: id }, { $set: data }, (err, bid) => {
      if (err) deferred.reject(err);

      deferred.resolve(bid);
    });
  } else {
    deferred.reject({});
  }

  return deferred.promise;
}

function create(name) {
  const deferred = Q.defer();
  const bid = new Bid({ name });
  bid.save((err, savedBid) => {
    if (err) deferred.reject(err);

    deferred.resolve(savedBid);
  });

  return deferred.promise;
}

function remove(id) {
  const deferred = Q.defer();
  Bid.remove({ _id: id }, (err, bid) => {
    if (err) deferred.reject(err);

    deferred.resolve(bid);
  });

  return deferred.promise;
}
