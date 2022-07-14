import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { safeNotesSchema } from './../schemas/safeNotesSchema.js';

import { create } from '../controllers/safeNotesController.js';

const safeNotesRoute = Router();

safeNotesRoute.use(validateToken);

safeNotesRoute.post('/safeNotes', validateSchema(safeNotesSchema), create);
safeNotesRoute.get('/safeNotes');
safeNotesRoute.get('/safeNotes/:id');
safeNotesRoute.delete('/safeNotes/:id');

export default safeNotesRoute;