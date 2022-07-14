import { Credential } from '@prisma/client';
import dotenv from 'dotenv';

import { conflict, notFound, unauthorized } from './../middlewares/errorHandlerMiddleware.js';

import * as credentialsRepository from './../repositories/credentialsRepository.js';

import { encryptPassword, decryptPassword } from './../utils/serviceUtils.js';

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

async function list(userId: number){
  const credentials = await credentialsRepository.findManyByUserId(userId);

  credentials.forEach((credential) => {
    credential.password = decryptPassword(credential.password);
  })

  return credentials;
}

async function listOne(id: number, userId: number){
  const credential = await credentialsRepository.findById(id);
  if(!credential) throw notFound();
  if(credential.userId !== userId) throw unauthorized();

  credential.password = decryptPassword(credential.password);

  return credential;
}

async function deleteOne(id: number, userId: number){
  const credential = await credentialsRepository.findById(id);
  if(!credential) throw notFound();
  if(credential.userId !== userId) throw unauthorized();

  await credentialsRepository.deleteOne(id);
}

export {
  post,
  list,
  listOne,
  deleteOne
}