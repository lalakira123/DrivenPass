import { prisma } from './../config/db.js';

import { CreateDataCredential } from './../services/credentialsService.js';

async function post(credential: CreateDataCredential){
  const { userId, username, password, url, title } = credential;
  await prisma.credential.create({
    data: {
      userId,
      username,
      password, 
      url,
      title
    }
  });
}

async function findByUserIdAndTitle(userId: number, title: string){
  const credential = await prisma.credential.findFirst({
    where: {
      AND: [
        { userId },
        { title }
      ]
    }
  });
  return credential;
}

async function findManyByUserId(userId: number){
  const credentials = await prisma.credential.findMany({
    where: {
      userId
    }
  });
  return credentials;
}

async function findById(id: number){
  const credential = await prisma.credential.findFirst({
    where: {
      id
    }
  });
  return credential;
}

async function deleteOne(id: number){
  await prisma.credential.delete({
    where: {
      id
    }
  });
}

export {
  post,
  findByUserIdAndTitle,
  findManyByUserId,
  findById,
  deleteOne
}