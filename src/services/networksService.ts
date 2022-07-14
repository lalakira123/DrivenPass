import { Network } from "@prisma/client";

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

export {
  create,
  list
}