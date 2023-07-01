const Contact = require('../../models/contact');

const getAll = async (req, res, next) => {
  const contacts = await Contact.find();
  console.log('hello');

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
