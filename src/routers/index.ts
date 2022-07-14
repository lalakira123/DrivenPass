import { Router } from 'express';

import usersRoute from './usersRoute.js';
import credentialsRoute from './credentialsRoute.js';

const router = Router();

router.use(usersRoute);
router.use(credentialsRoute);

export default router;