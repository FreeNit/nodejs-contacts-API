const express = require('express');
const contactsAPI = require('../../models/contacts');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const contacts = await contactsAPI.listContacts();

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
});

router.get('/:contactId', async (req, res, next) => {
  const contactId = req.params.contactId;
  const contact = await contactsAPI.getContactById(contactId);

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  });
});

router.post('/', async (req, res, next) => {
  res.json({ status: 'success', code: 200, data: {} });
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
