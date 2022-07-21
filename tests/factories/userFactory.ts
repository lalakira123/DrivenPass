import { faker } from '@faker-js/faker';

function createValidUser(){
  return {
    email: faker.internet.email(),
    password: faker.internet.password(10)
  }    
}

function createInvalidUser(){
  return {
    email: faker.internet.userName(),
    password: faker.internet.password(9)
  }
}

export {
  createValidUser,
  createInvalidUser
}