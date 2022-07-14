import Joi from 'joi';
import { CreateDataNetwork } from './../services/networksService.js';

type BodyNetwork = Omit<CreateDataNetwork, 'userId'>;

export const networksSchema = Joi.object<BodyNetwork>({
  title: Joi.string().required(),
  name: Joi.string().required(),
  password: Joi.string().required()
})