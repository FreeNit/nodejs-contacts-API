const { NotFound } = require('http-errors');

const contactsAPI = require('../../models/contacts');

const removeById = async (req, res, next) => {
  const { contactId } = req.params;

  const result = await contactsAPI.removeContact(contactId);

  if (!result) {
    throw new NotFound(`Product with id=${contactId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'product deleted',
    data: {
      result,
    },
  });

  // try {
  //   const { contactId } = req.params;

  //   const result = await contactsAPI.removeContact(contactId);

  //   if (!result) {
  //     throw new NotFound(`Product with id=${contactId} not found`);
  //   }

  //   res.json({
  //     status: 'success',
  //     code: 200,
  //     message: 'product deleted',
  //     data: {
  //       result,
  //     },
  //   });
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = removeById;
