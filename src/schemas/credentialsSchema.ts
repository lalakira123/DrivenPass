import Joi from 'joi';
import { CreateDataCredential } from './../services/credentialsService.js';

type BodyCredential = Omit<CreateDataCredential, "userId">

export const credentialsSchema = Joi.object<BodyCredential>({
  username: Joi.string().required(),
  password: Joi.string().required(),
  url: Joi.string().uri().required(),
  title: Joi.string().required()
});