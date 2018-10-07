import express from 'express';
import ctrl from './bidder.ctrl';

const router = express.Router();

router
  .route('/bidder')

  // GET /api/v1/bidder - Get list of bidders
  .get(ctrl.getAll)

  // POST /api/v1/bidder - Create new bidder
  .post(ctrl.create);

router
  .route('/bidder/:id')

  // DELETE /api/v1/bidder/:id - Delete bidder
  .delete(ctrl.remove)

  // PUT /api/v1/bidder/:id - Update bidder
  .put(ctrl.update);

export default router;
