import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '@prisma/client';

import * as usersRepository from './../repositories/usersRepository.js';

import { conflict, notFound, unauthorized } from './../middlewares/errorHandlerMiddleware.js';

export type CreateDataUser = Omit<User, "id">;

dotenv.config();

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

async function authenticate(user: CreateDataUser){
  const { email, password } = user;
  const userExist = await usersRepository.findByEmail(email);
  if(!userExist) throw notFound();
  if(!comparePassword(password, userExist.password)) throw unauthorized();

  return generateToken({userId: userExist.id});
}

function comparePassword(password: string, hashPassword: string){
  return bcrypt.compareSync(password, hashPassword);
}

function generateToken(userId: {userId: number}){
  const secretKey = process.env.JWT_TOKEN;
  const twelveHours = 60*60*12;
  const config = { expiresIn: twelveHours };
  return jwt.sign(userId, secretKey, config);
}

export {
  post,
  authenticate
}