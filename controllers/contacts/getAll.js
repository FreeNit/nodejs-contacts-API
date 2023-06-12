const contactsAPI = require('../../models/contacts');

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsAPI.listContacts();

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
    // res.status(500).json({
    //   status: 'error',
    //   code: 500,
    //   message: 'Server error',
    // });
  }
};

module.exports = getAll;
