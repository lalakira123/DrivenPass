import { Card } from '@prisma/client';

import { conflict, notFound, unauthorized } from './../middlewares/errorHandlerMiddleware.js';

import { encryptPassword, decryptPassword } from './../utils/serviceUtils.js';

import * as cardsRepository from './../repositories/cardsRepository.js';

export type CreateDataCard = Omit<Card, "id">;

async function create(card: CreateDataCard){
  const { userId, title, password, securityCode } = card;
  
  const cardExist = await cardsRepository.findByUserIdAndTitle(userId, title);
  if(cardExist) throw conflict();

  card = {
    ...card,
    password: encryptPassword(password),
    securityCode: encryptPassword(securityCode)
  }

  await cardsRepository.create(card);
}

async function list(userId: number){
  const cards = await cardsRepository.findManyByUserId(userId);

  cards.forEach((card) => {
    card.password = decryptPassword(card.password);
    card.securityCode = decryptPassword(card.securityCode);
  })

  return cards;
}

async function listOne(userId: number, id: number){
  let card = await cardsRepository.findById(id);
  if(!card) throw notFound();
  if(card.userId !== userId) throw unauthorized();

  card = {
    ...card,
    password: decryptPassword(card.password),
    securityCode: decryptPassword(card.securityCode)
  }

  return card;
}

async function deleteOne(userId: number, id: number){
  const card = await cardsRepository.findById(id);
  if(!card) throw notFound();
  if(card.userId !== userId) throw unauthorized();

  await cardsRepository.deleteById(id);
}

export {
  create,
  list,
  listOne,
  deleteOne
}