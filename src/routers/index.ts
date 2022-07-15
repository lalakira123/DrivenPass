import { Router } from 'express';

import usersRoute from './usersRoute.js';
import credentialsRoute from './credentialsRoute.js';
import safeNotesRoute from './safeNotesRoute.js';
import networksRoute from './networksRoute.js';
import cardsRoute from './cardsRoute.js';

const router = Router();

router.use(usersRoute);
router.use(credentialsRoute);
router.use(safeNotesRoute);
router.use(networksRoute);
router.use(cardsRoute);

export default router;