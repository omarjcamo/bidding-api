import Q from 'q';
import Bidder from './bidder.model';

export default {
  getAll,
  update,
  create,
  remove
};

function getAll() {
  const deferred = Q.defer();

  Bidder.find({}, (err, bidders) => {
    if (err) deferred.reject(err);
    deferred.resolve(bidders);
  });

  return deferred.promise;
}

function update(id, data) {
  const deferred = Q.defer();

  // @TODO: Potentially control what is in data to be updated

  if (Object.keys(data).length > 0) {
    Bidder.update({ _id: id }, { $set: data }, (err, bidder) => {
      if (err) deferred.reject(err);

      deferred.resolve(bidder);
    });
  } else {
    deferred.reject({});
  }

  return deferred.promise;
}

function create(name) {
  const deferred = Q.defer();
  const bidder = new Bidder({ name });
  bidder.save((err, savedBidder) => {
    if (err) deferred.reject(err);

    deferred.resolve(savedBidder);
  });

  return deferred.promise;
}

function remove(id) {
  const deferred = Q.defer();
  Bidder.remove({ _id: id }, (err, bidder) => {
    if (err) deferred.reject(err);

    deferred.resolve(bidder);
  });

  return deferred.promise;
}
