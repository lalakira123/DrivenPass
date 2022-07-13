import bcrypt from 'bcrypt';

import * as usersRepository from './../repositories/usersRepository.js';

import { conflict } from './../middlewares/errorHandlerMiddleware.js';

export type CreateDataUser = Omit<usersRepository.User, "id">;

async function post(user: CreateDataUser){
  const { email, password } = user;
  const userExist = await usersRepository.findByEmail(email);
  if(userExist) throw conflict();

  user = {
    email, 
    password: hashPassword(password)
  }

  await usersRepository.post(user);
}

function hashPassword(password: string){
  const SALT = 10;
  return bcrypt.hashSync(password, SALT);
}

export {
  post
}