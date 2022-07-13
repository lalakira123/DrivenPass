import { Router } from 'express';

import usersRoute from './usersRoute.js';

const router = Router();

router.use(usersRoute);

export default router;