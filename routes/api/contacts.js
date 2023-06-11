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

  if (!contact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Product with id=${contactId} not found`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  });
});

router.post('/', async (req, res, next) => {
  const newContact = await contactsAPI.addContact(req.body);
  res.json({
    status: 'contact successfully created',
    code: 201,
    data: { result: newContact },
  });
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
