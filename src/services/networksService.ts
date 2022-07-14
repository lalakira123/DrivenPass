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

export {
  create
}