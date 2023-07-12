const express = require('express');

const ctrl = require('../../controllers/auth');

const {
  validation: validateBody,
  authenticate,
  upload,
} = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

// signup
router.post(
  '/register',
  validateBody(schemas.registrationSchema),
  ctrl.register
);

// email verification
router.get('/verify/:verificationCode', ctrl.verifyEmail);

// signin
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);

// logout
router.post('/logout', authenticate, ctrl.logout);

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  ctrl.updateAvatar
);

module.exports = router;
