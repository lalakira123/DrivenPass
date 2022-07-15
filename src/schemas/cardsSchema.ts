import Joi from 'joi';
import { CreateDataCard } from './../services/cardsService.js';

type BodyCard = Omit<CreateDataCard, "userId">;

export const cardsSchema = Joi.object<BodyCard>({
  title: Joi.string().required(),
  cardNumber: Joi.string().required(),
  expirateDate: Joi.date().required(),
  isVirtual: Joi.boolean().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  securityCode: Joi.string().required(),
  type: Joi.string().valid("credit", "debt", "both").required()
})