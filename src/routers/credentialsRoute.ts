import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { credentialsSchema } from './../schemas/credentialsSchema.js';

import { list, post } from './../controllers/credentialsController.js';

const credentialsRoute = Router();

credentialsRoute.use(validateToken);

credentialsRoute.post('/credentials', validateSchema(credentialsSchema), post);
credentialsRoute.get('/credentials', list);
credentialsRoute.get('/credentials/:id');
credentialsRoute.delete('/credentials/:id');

export default credentialsRoute;