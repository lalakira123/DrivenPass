import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { safeNotesSchema } from './../schemas/safeNotesSchema.js';

import { create, deleteOne, list, listOne } from './../controllers/safeNotesController.js';

const safeNotesRoute = Router();

safeNotesRoute.use(validateToken);

safeNotesRoute.post('/safeNotes', validateSchema(safeNotesSchema), create);
safeNotesRoute.get('/safeNotes', list);
safeNotesRoute.get('/safeNotes/:id', listOne);
safeNotesRoute.delete('/safeNotes/:id', deleteOne);

export default safeNotesRoute;