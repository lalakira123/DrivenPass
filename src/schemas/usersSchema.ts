import Joi from 'joi';

export const usersSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required()
});

export const authUsersSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

