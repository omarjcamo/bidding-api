import ItemDa from './item.da';

export default {
  getAll,
  update,
  create,
  remove
};

function getAll(req, res) {
  ItemDa.getAll()
    .then(items => res.status(200).json(items))
    .catch(() => res.sendStatus(422));
}

function update(req, res) {
  const { id } = req.params;

  ItemDa.update(id, req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(422));
}

function create(req, res) {
  const { name } = req.body;

  ItemDa.create(name)
    .then(item => res.status(200).json(item))
    .catch(() => res.sendStatus(422));
}

function remove(req, res) {
  const { id } = req.params;

  ItemDa.remove(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(422));
}
