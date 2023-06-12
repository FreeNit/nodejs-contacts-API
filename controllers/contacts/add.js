// const { BadRequest } = require('http-errors');

const contactsAPI = require('../../models/contacts');

const add = async (req, res, next) => {
  try {
    // const { error } = contactSchema.validate(req.body);
    // if (error) {
    //   throw new BadRequest(error);
    //   // **************************************************************
    //   // error.status = 400;
    //   // throw error;
    // }

    const newContact = await contactsAPI.addContact(req.body);
    res.status(201).json({
      status: 'Contact successfully created',
      code: 201,
      data: { result: newContact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
