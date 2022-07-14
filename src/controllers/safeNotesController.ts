import { Request, Response } from 'express';

import * as safeNotesService from './../services/safeNotesService.js';

export async function create(req: Request, res: Response){
  let safeNote: safeNotesService.CreateDataSafeNote = req.body;
  const userId = res.locals.userId;
  
  safeNote = {
    ...safeNote,
    userId
  }

  await safeNotesService.create(safeNote);

  res.sendStatus(201);
}