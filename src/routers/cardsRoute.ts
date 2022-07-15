import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { cardsSchema } from './../schemas/cardsSchema.js';

import { create, list } from './../controllers/cardsController.js';

const cardsRoute = Router();

cardsRoute.use(validateToken);

cardsRoute.post('/cards', validateSchema(cardsSchema), create);
cardsRoute.get('/cards', list);
cardsRoute.get('/cards/:id');
cardsRoute.delete('/cards/:id');

export default cardsRoute;