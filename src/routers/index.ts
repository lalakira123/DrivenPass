import { Router } from 'express';

import usersRoute from './usersRoute.js';
import credentialsRoute from './credentialsRoute.js';
import safeNotesRoute from './safeNotesRoute.js';

const router = Router();

router.use(usersRoute);
router.use(credentialsRoute);
router.use(safeNotesRoute);

export default router;