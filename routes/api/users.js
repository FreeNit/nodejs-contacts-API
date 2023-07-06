const express = require('express');

const { ctrlWrapper, validation, authenticate } = require('../../middlewares');
const ctrl = require('../../controllers/users');
const { schemas } = require('../../models/user');

const router = express.Router();

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch(
  '/',
  authenticate,
  validation(schemas.updateSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
