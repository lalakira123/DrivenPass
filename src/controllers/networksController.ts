import { Request, Response } from 'express';

import * as networksService from './../services/networksService.js';

export async function create(req: Request, res: Response){
  let network: networksService.CreateDataNetwork = req.body;
  const userId: number = res.locals.userId;

  network = {
    ...network,
    userId
  }

  await networksService.create(network);

  res.sendStatus(201);
}