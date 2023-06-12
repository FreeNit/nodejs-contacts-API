const contactsAPI = require('../../models/contacts');

const getAll = async (req, res, next) => {
  const contacts = await contactsAPI.listContacts();

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
