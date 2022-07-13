import { Request, Response } from 'express';

import * as usersService from './../services/usersService.js';

export async function postUser(req: Request, res: Response){
  const user: usersService.CreateDataUser = req.body;

  await usersService.post(user);

  res.sendStatus(201);
}