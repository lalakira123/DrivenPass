import Joi from 'joi';
import { CreateDataUser } from './../services/usersService.js';

export const usersSchema = Joi.object<CreateDataUser>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required()
});

export const authUsersSchema = Joi.object<CreateDataUser>({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

