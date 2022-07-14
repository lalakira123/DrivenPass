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

export async function list(req: Request, res: Response){
  const userId = res.locals.userId;

  const safeNotes = await safeNotesService.list(userId);

  res.status(200).send(safeNotes);
}

export async function listOne(req: Request, res: Response){
  const { id } = req.params;
  const userId = res.locals.userId;

  const safeNote = await safeNotesService.listOne(userId, Number(id));

  res.status(200).send(safeNote);
}