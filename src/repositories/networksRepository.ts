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

export {
  create
}