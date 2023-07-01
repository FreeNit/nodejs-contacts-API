const { Contact } = require('../../models/contact');

const add = async (req, res, next) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json({
    status: 'Contact successfully created',
    code: 201,
    data: { result: newContact },
  });
};

module.exports = add;
