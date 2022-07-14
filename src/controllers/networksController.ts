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

export async function list(req: Request, res: Response){
  const userId: number = res.locals.userId;

  const networks = await networksService.list(userId);

  res.status(200).send(networks);
}