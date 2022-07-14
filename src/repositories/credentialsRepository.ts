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
  })
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

export {
  post,
  findByUserIdAndTitle
}