const express = require('express');

const { validation } = require('../../middlewares');
const { productSchema } = require('../../schemas');

const { contacts: ctrl } = require('../../controllers');

const validateMiddleware = validation(productSchema);

// const contactsAPI = require('../../models/contacts');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateMiddleware, ctrl.add);

router.put('/:contactId', validateMiddleware, ctrl.updateById);

router.delete('/:contactId', ctrl.removeById);

module.exports = router;
