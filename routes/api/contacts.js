const express = require('express');

const {
  validation,
  ctrlWrapper,
  isValidId,
  authenticate,
} = require('../../middlewares');
const { schemas } = require('../../models/contact');

const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post(
  '/',
  authenticate,
  validation(schemas.addSchema),
  ctrlWrapper(ctrl.add)
);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validation(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validation(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete(
  '/:contactId',
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.removeById)
);

module.exports = router;
