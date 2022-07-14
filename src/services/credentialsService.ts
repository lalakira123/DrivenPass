import { Credential } from '@prisma/client';
import Cryptr from 'cryptr';
import dotenv from 'dotenv';

import { conflict } from './../middlewares/errorHandlerMiddleware.js';

import * as credentialsRepository from './../repositories/credentialsRepository.js';

dotenv.config();

export type CreateDataCredential = Omit<Credential, "id">

async function post(credential: CreateDataCredential){
  const { userId, password, title } = credential;
  const credentialExist = await credentialsRepository.findByUserIdAndTitle(userId, title);
  if(credentialExist) throw conflict();

  credential = {
    ...credential,
    password: encryptPassword(password)
  }

  await credentialsRepository.post(credential);
}

function encryptPassword(password: string){
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  return cryptr.encrypt(password);
}

export {
  post
}