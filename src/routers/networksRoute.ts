import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { networksSchema } from './../schemas/networksSchema.js';

import { create } from './../controllers/networksController.js';

const networksRoute = Router();

networksRoute.use(validateToken);

networksRoute.post('/networks', validateSchema(networksSchema), create);
networksRoute.get('/networks');
networksRoute.get('/networks/:id');
networksRoute.delete('/networks/:id');

export default networksRoute;