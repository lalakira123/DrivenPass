import { Request, Response } from 'express';

import * as cardsService from './../services/cardsService.js';

export async function create(req: Request, res: Response){
  let card: cardsService.CreateDataCard = req.body;
  const userId: number = res.locals.userId;

  card = {
    ...card,
    userId
  }

  await cardsService.create(card);

  res.sendStatus(201);
}

export async function list(req: Request, res: Response){
  const userId: number = res.locals.userId;

  const cards = await cardsService.list(userId);

  res.status(200).send(cards);
}

export async function listOne(req: Request, res: Response){
  const id: number = Number(req.params.id);
  const userId: number = res.locals.userId;

  const card = await cardsService.listOne(userId, id);

  res.status(200).send(card);
}