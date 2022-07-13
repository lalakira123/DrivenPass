import { Request, Response, NextFunction } from 'express';

const serviceErrorToStatusCode = {
  conflict: 409
};

export function conflict(){
  return { type: 'conflict' };
}

export default async function handleError(error, req: Request, res: Response, next: NextFunction){
  if(error.type) res.sendStatus(serviceErrorToStatusCode[error.type]);
  res.sendStatus(500);
}