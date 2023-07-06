const express = require('express');

const { ctrlWrapper, authenticate } = require('../../middlewares');
const ctrl = require('../../controllers/users');

const router = express.Router();

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

module.exports = router;
