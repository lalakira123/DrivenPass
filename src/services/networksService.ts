import { Network } from "@prisma/client";

import { notFound, unauthorized } from './../middlewares/errorHandlerMiddleware.js';

import * as networksRepository from './../repositories/networksRepository.js';

import { encryptPassword, decryptPassword } from './../utils/serviceUtils.js';

export type CreateDataNetwork = Omit<Network, "id">;

async function create(network: CreateDataNetwork){
  const { password } = network;

  network = {
    ...network,
    password: encryptPassword(password)
  }

  await networksRepository.create(network);
}

async function list(userId: number){
  let networks = await networksRepository.list(userId);

  networks.forEach((network) => {
    network.password = decryptPassword(network.password);
  })

  return networks;
}

async function listOne(userId: number, id: number){
  let network = await networksRepository.findById(id);
  if(!network) throw notFound();
  if(network.userId !== userId) throw unauthorized();

  network = {
    ...network,
    password: decryptPassword(network.password)
  }

  return network;
}

async function deleteOne(userId: number, id: number){
  const network = await networksRepository.findById(id);
  if(!network) throw notFound();
  if(network.userId !== userId) throw unauthorized();

  await networksRepository.deleteById(id);
}

export {
  create,
  list,
  listOne,
  deleteOne
}