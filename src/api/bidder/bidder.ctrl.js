import BidderDa from './bidder.da';

export default {
  getAll,
  update,
  create,
  remove
};

function getAll(req, res) {
  BidderDa.getAll()
    .then(bidders => res.status(200).json(bidders))
    .catch(() => res.sendStatus(422));
}

function update(req, res) {
  const { id } = req.params;

  BidderDa.update(id, req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(422));
}

function create(req, res) {
  const { name } = req.body;

  BidderDa.create(name)
    .then(bidder => res.status(200).json(bidder))
    .catch(() => res.sendStatus(422));
}

function remove(req, res) {
  const { id } = req.params;

  BidderDa.remove(id)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(422));
}
