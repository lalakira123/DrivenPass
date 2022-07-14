import { request, Request, Response } from 'express';

import * as credentialsService from './../services/credentialsService.js';

export async function post(req: Request, res: Response){
  let credential: credentialsService.CreateDataCredential = req.body;
  const userId: number = res.locals.userId;

  credential = {
    ...credential,
    userId
  }

  await credentialsService.post(credential);

  res.sendStatus(201);
}

export async function list(req: Request, res: Response){
  const userId: number = res.locals.userId;

  const credentials = await credentialsService.list(userId);

  res.status(200).send(credentials);
}

export async function listOne(req: Request, res: Response){
  const { id } = req.params;
  const userId = res.locals.userId;

  const credential = await credentialsService.listOne(Number(id), userId);

  res.status(200).send(credential);
}

export async function deleteOne(req: Request, res: Response){
  const { id } = req.params;
  const userId = res.locals.userId;

  await credentialsService.deleteOne(Number(id), userId);

  res.sendStatus(204);
}