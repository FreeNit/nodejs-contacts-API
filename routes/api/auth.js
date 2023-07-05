const express = require('express');

const ctrl = require('../../controllers/auth');

const { validation: validateBody, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

// signup
router.post(
  '/register',
  validateBody(schemas.registrationSchema),
  ctrl.register
);

// signin
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

// logout
router.post('/logout', authenticate, ctrl.logout);

router.get('/current', authenticate, ctrl.getCurrent);

module.exports = router;
