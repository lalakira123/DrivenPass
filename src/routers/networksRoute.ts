import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { networksSchema } from './../schemas/networksSchema.js';

import { create, list, listOne } from './../controllers/networksController.js';

const networksRoute = Router();

networksRoute.use(validateToken);

networksRoute.post('/networks', validateSchema(networksSchema), create);
networksRoute.get('/networks', list);
networksRoute.get('/networks/:id', listOne);
networksRoute.delete('/networks/:id');

export default networksRoute;