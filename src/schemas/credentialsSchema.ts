import Joi from 'joi';

export const credentialsSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  url: Joi.string().uri().required(),
  title: Joi.string().required()
});