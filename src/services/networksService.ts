import { Network } from "@prisma/client";
import Cryptr from "cryptr";

import * as networksRepository from './../repositories/networksRepository.js';

export type CreateDataNetwork = Omit<Network, "id">;

async function create(network: CreateDataNetwork){
  const { password } = network;

  network = {
    ...network,
    password: encryptPassword(password)
  }

  await networksRepository.create(network);
}

function encryptPassword(password: string){
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  return cryptr.encrypt(password);
}

async function list(userId: number){
  let networks = await networksRepository.list(userId);

  networks.forEach((network) => {
    network.password = decryptPassword(network.password);
  })

  return networks;
}

function decryptPassword(password: string){
  const cryptr = new Cryptr(process.env.SECRET_KEY);
  return cryptr.decrypt(password);
}

export {
  create,
  list
}