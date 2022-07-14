import { prisma } from './../config/db.js';

import { CreateDataNetwork } from './../services/networksService.js';

async function create(network: CreateDataNetwork){
  const { userId, title, name, password } = network;
  await prisma.network.create({
    data: {
      userId,
      title,
      name,
      password
    }
  });
}

async function list(userId: number){
  const networks = prisma.network.findMany({
    where: {
      userId
    }
  });
  return networks;
}

async function findById(id: number){
  const network = prisma.network.findFirst({
    where: {
      id
    }
  });
  return network;
}

export {
  create,
  list,
  findById
}