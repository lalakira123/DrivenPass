import { Router } from 'express';

import usersSchema from '../schemas/usersSchema.js';

import validateSchema from './../middlewares/validateSchemaMiddleware.js';

import { authUser, postUser } from './../controllers/usersController.js';

const usersRoute = Router();

usersRoute.post('/sign-up', validateSchema(usersSchema), postUser);
usersRoute.post('/sign-in', validateSchema(usersSchema), authUser);

export default usersRoute;