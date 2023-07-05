const { Contact } = require('../../models/contact');

const add = async (req, res, next) => {
  const { _id: owner } = req.user;
  console.log('OWNER -> ', owner);
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json({
    status: 'Contact successfully created',
    code: 201,
    data: { result: newContact },
  });
};

module.exports = add;
