import { Router } from 'express';

import validateToken from './../middlewares/validateTokenMiddleware.js';
import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { cardsSchema } from './../schemas/cardsSchema.js';

import { create, deleteOne, list, listOne } from './../controllers/cardsController.js';

const cardsRoute = Router();

cardsRoute.use(validateToken);

cardsRoute.post('/cards', validateSchema(cardsSchema), create);
cardsRoute.get('/cards', list);
cardsRoute.get('/cards/:id', listOne);
cardsRoute.delete('/cards/:id', deleteOne);

export default cardsRoute;