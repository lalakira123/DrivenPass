import app from '../src/app.js';
import supertest from 'supertest';

import { prisma } from './../src/config/db.js';

import * as userFactory from './factories/userFactory.js';

beforeEach(async () => {
    await prisma.$executeRaw`DELETE FROM users;`;
});
  
describe("POST /users", () => {
    it("given valids information should create an account and return status 201", async () => {
        const body = userFactory.createValidUser();

        const firstTry = await supertest(app).post("/sign-up").send(body);
        expect(firstTry.status).toEqual(201); 
    });

    it("given invalids information should return status 422", async () => {
        const body = userFactory.createInvalidUser();

        const firstTry = await supertest(app).post("/sign-up").send(body);
        expect(firstTry.status).toEqual(422);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});
