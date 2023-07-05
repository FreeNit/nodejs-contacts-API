const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, 'User Name is mandatory'],
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      require: [true, 'User Email is mandatory'],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Password is mandatory'],
    },
    token: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleMongooseError);

const registrationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

// Validation during request from the frontend part
const schemas = {
  registrationSchema,
  loginSchema,
};

// Working with mongoDB - backend part
const User = model('user', userSchema);

module.exports = {
  User,
  schemas,
};
