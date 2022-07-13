import { Router } from 'express';

import usersSchema from '../schemas/usersSchema.js';

import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { postUser } from './../controllers/usersController.js';

const usersRoute = Router();

usersRoute.post('/sign-up', validateSchema(usersSchema), postUser);

export default usersRoute;