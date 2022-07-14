import { prisma } from './../config/db.js';
import { CreateDataSafeNote } from './../services/safeNotesService.js';

async function create(safeNote: CreateDataSafeNote){
  const { userId, title, note } = safeNote;
  
  await prisma.safeNote.create({
    data: {
      userId,
      title,
      note
    }
  })
}

async function findByUserIdAndTitle(userId: number, title: string){
  const safeNote = await prisma.safeNote.findFirst({
    where: {
      AND: [
        { userId },
        { title }
      ]
    }
  });
  return safeNote;
}

async function findManyByUserId(userId: number){
  const safeNotes = await prisma.safeNote.findMany({
    where: {
      userId
    }
  });
  return safeNotes;
}

export {
  create,
  findByUserIdAndTitle,
  findManyByUserId
}