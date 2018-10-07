import express from 'express';
import ctrl from './item.ctrl';

const router = express.Router();

router
  .route('/item')

  // GET /api/v1/item - Get list of items
  .get(ctrl.getAll)

  // POST /api/v1/item - Create new item
  .post(ctrl.create);

router
  .route('/item/:id')

  // DELETE /api/v1/item/:id - Delete item
  .delete(ctrl.remove)

  // PUT /api/v1/item/:id - Update item
  .put(ctrl.update);

export default router;
