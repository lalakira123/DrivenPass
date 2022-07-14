import { Request, Response } from 'express';

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