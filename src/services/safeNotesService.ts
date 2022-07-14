import { SafeNote } from '@prisma/client';

import { conflict } from './../middlewares/errorHandlerMiddleware.js';

import * as safeNotesRepository from './../repositories/safeNotesRepository.js';

export type CreateDataSafeNote = Omit<SafeNote, "id">;

async function create(safeNote: CreateDataSafeNote){
  const { userId, title } = safeNote;
  const existSafeNote = await safeNotesRepository.findByUserIdAndTitle(userId, title);
  if(existSafeNote) throw conflict();

  await safeNotesRepository.create(safeNote);
}

export {
  create
}