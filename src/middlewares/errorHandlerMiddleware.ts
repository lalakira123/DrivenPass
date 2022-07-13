import { Request, Response, NextFunction } from 'express';

const serviceErrorToStatusCode = {

};

export default async function handleError(error, req: Request, res: Response, next: NextFunction){
  if(error.type) res.sendStatus(serviceErrorToStatusCode[error.type]);
  res.sendStatus(500);
}