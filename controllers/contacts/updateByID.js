// const { NotFound } = require('http-errors');

// const contactsAPI = require('../../models/contacts');

// const updateById = async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await contactsAPI.updateContact(contactId, req.body);

//   if (!result) {
//     throw new NotFound(`Product with id=${contactId} not found`);
//   }

//   res.json({
//     status: 'success',
//     code: 200,
//     data: {
//       result,
//     },
//   });
// };

// module.exports = updateById;
