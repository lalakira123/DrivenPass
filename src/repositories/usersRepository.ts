import { prisma } from './../config/db.js';

import * as usersService from './../services/usersService.js';

async function post(user: usersService.CreateDataUser){
  const { email, password } = user;
  await prisma.user.create({
    data: {
      email,
      password
    }
  })
}

async function findByEmail(email: string){
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })
  return user;
}

export {
  post,
  findByEmail
}