const { BadRequest, NotFound } = require('http-errors');
const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const contactsAPI = require('../../models/contacts');

const updateById = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw new BadRequest(error);
    }

    const { contactId } = req.params;
    const result = await contactsAPI.updateContact(contactId, req.body);

    if (!result) {
      throw new NotFound(`Product with id=${contactId} not found`);
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
