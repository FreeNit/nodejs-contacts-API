const contactsAPI = require('../../models/contacts');

const add = async (req, res, next) => {
  const newContact = await contactsAPI.addContact(req.body);
  res.status(201).json({
    status: 'Contact successfully created',
    code: 201,
    data: { result: newContact },
  });
};

module.exports = add;
