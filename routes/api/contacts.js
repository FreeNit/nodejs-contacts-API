const express = require('express');
// const createError = require('http-errors');
const { NotFound, BadRequest } = require('http-errors');
const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const contactsAPI = require('../../models/contacts');

const router = express.Router();

router.get('/', async (req, res, next) => {
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
});

router.get('/:contactId', async (req, res, next) => {
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
});

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw new BadRequest(error);
      // **************************************************************
      // error.status = 400;
      // throw error;
    }

    const newContact = await contactsAPI.addContact(req.body);
    res.status(201).json({
      status: 'Contact successfully created',
      code: 201,
      data: { result: newContact },
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw new BadRequest(error);
    }

    const { contactId } = req.params;
    const result = await contactsAPI.updateContact(contactId, req.body);

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
});

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' });
});

module.exports = router;
