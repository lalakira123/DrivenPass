import { Request, Response } from 'express';

import * as usersService from './../services/usersService.js';

export async function postUser(req: Request, res: Response){
  const user: usersService.CreateDataUser = req.body;

  await usersService.post(user);

  res.sendStatus(201);
}

export async function authUser(req: Request, res: Response){
  const user: usersService.CreateDataUser = req.body;

  const token: string = await usersService.authenticate(user);

  res.status(200).send(token);
}