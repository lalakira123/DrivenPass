import { prisma } from './../config/db.js';

import { CreateDataCard } from './../services/cardsService.js';

async function create(card: CreateDataCard){
  const { 
    userId, 
    title, 
    cardNumber, 
    name, 
    securityCode, 
    expirateDate, 
    password, 
    isVirtual, 
    type 
  } = card;
  await prisma.card.create({
    data: {
      userId,
      title,
      cardNumber,
      name,
      securityCode,
      expirateDate,
      password,
      isVirtual,
      type
    }
  });
}

async function findByUserIdAndTitle(userId: number, title: string){
  const card = prisma.card.findFirst({
    where: {
      userId,
      title
    }
  });
  return card;
}

async function findManyByUserId(userId: number){
  const cards = prisma.card.findMany({
    where: {
      userId
    }
  });
  return cards;
}

async function findById(id: number){
  const card = prisma.card.findFirst({
    where: {
      id
    }
  });
  return card;
}

async function deleteById(id: number){
  await prisma.card.delete({
    where: {
      id
    }
  });
}

export {
  create, 
  findByUserIdAndTitle,
  findManyByUserId,
  findById,
  deleteById
}