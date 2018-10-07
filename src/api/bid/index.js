import express from 'express';
import ctrl from './bid.ctrl';

const router = express.Router();

router
  .route('/bid')

  // GET /api/v1/bid - Get list of bids
  .get(ctrl.getAll)

  // POST /api/v1/bid - Create new bid
  .post(ctrl.create);

router
  .route('/bid/:id')

  // DELETE /api/v1/bid/:id - Delete bid
  .delete(ctrl.remove)

  // PUT /api/v1/bid/:id - Update bid
  .put(ctrl.update);

export default router;
