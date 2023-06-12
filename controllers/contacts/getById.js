const { NotFound } = require('http-errors');
const contactsAPI = require('../../models/contacts');

const getById = async (req, res, next) => {
  const contactId = req.params.contactId;
  const contact = await contactsAPI.getContactById(contactId);

  if (!contact) {
    throw new NotFound(`Product with id=${contactId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = getById;
