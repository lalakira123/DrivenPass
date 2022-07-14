import Joi from 'joi';
import { CreateDataSafeNote } from './../services/safeNotesService.js';

type BodySafeNote = Omit<CreateDataSafeNote, "userId">;

export const safeNotesSchema = Joi.object<BodySafeNote>({
  title: Joi.string().max(50).required(),
  note: Joi.string().max(1000).required()
})