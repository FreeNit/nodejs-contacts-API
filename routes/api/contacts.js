const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const { contacts: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validation(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put(
  '/:contactId',
  validation(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  validation(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

module.exports = router;
