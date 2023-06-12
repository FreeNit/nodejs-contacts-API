// const createError = require('http-errors');
const { NotFound } = require('http-errors');
const contactsAPI = require('../../models/contacts');

const getById = async (req, res, next) => {
  try {
    const contactId = req.params.contactId;
    const contact = await contactsAPI.getContactById(contactId);

    if (!contact) {
      throw new NotFound(`Product with id=${contactId} not found`);
      // **************************************************************
      // throw createError(404, `Product with id=${contactId} not found`);
      // **************************************************************
      // const error = new Error(`Product with id=${contactId} not found`);
      // error.status = 404;
      // throw error;
      // **************************************************************
      // res.status(404).json({
      //   status: 'error',
      //   code: 404,
      //   message: `Product with id=${contactId} not found`,
      // });
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result: contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
