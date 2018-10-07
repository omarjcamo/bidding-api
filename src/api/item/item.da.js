import Q from 'q';
import Item from './item.model';

export default {
  getAll,
  update,
  create,
  remove
};

function getAll() {
  const deferred = Q.defer();

  Item.find({}, (err, items) => {
    if (err) deferred.reject(err);
    deferred.resolve(items);
  });

  return deferred.promise;
}

function update(id, data) {
  const deferred = Q.defer();

  // @TODO: Potentially control what is in data to be updated

  if (Object.keys(data).length > 0) {
    Item.update({ _id: id }, { $set: data }, (err, item) => {
      if (err) deferred.reject(err);

      deferred.resolve(item);
    });
  } else {
    deferred.reject({});
  }

  return deferred.promise;
}

function create(name) {
  const deferred = Q.defer();
  const item = new Item({ name });
  item.save((err, savedItem) => {
    if (err) deferred.reject(err);

    deferred.resolve(savedItem);
  });

  return deferred.promise;
}

function remove(id) {
  const deferred = Q.defer();
  Item.remove({ _id: id }, (err, item) => {
    if (err) deferred.reject(err);

    deferred.resolve(item);
  });

  return deferred.promise;
}
