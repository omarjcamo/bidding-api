import BidDa from './bid.da';

export default {
  getAll,
  update,
  create,
  remove
};

function getAll(req, res) {
  BidDa.getAll()
    .then(bids => res.status(200).json(bids))
    .catch(() => res.sendStatus(422));
}

function update(req, res) {
  const { id } = req.params;

  BidDa.update(id, req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(422));
}

function create(req, res) {
  const { name } = req.body;

  BidDa.create(name)
    .then(bid => res.status(200).json(bid))
    .catch(() => res.sendStatus(422));
}

function remove(req, res) {
  const { id } = req.params;

  BidDa.remove(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(422));
}
