import { SafeNote } from '@prisma/client';

import { conflict, notFound, unauthorized } from './../middlewares/errorHandlerMiddleware.js';

import * as safeNotesRepository from './../repositories/safeNotesRepository.js';

export type CreateDataSafeNote = Omit<SafeNote, "id">;

async function create(safeNote: CreateDataSafeNote){
  const { userId, title } = safeNote;
  const existSafeNote = await safeNotesRepository.findByUserIdAndTitle(userId, title);
  if(existSafeNote) throw conflict();

  await safeNotesRepository.create(safeNote);
}

async function list(userId: number){
  return await safeNotesRepository.findManyByUserId(userId);
}

async function listOne(userId: number, id: number){
  const safeNote = await safeNotesRepository.findById(id);
  if(!safeNote) throw notFound();
  if(safeNote.userId !== userId) throw unauthorized();

  return safeNote;
}

export {
  create,
  list,
  listOne
}