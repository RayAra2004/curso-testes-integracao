import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    // TODO
    const data = {
      email: "teste@gmail.com",
      password: "123456"
    }
    const {status} = await api.post("/users").send(data);
    expect(status).toBe(201);
  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    // TODO
    const data = {
      email: "teste@gmail.com",
      password: "123456"
    }

    await prisma.user.create({
      data
    })

    const {status} = await api.post("/users").send(data);
    expect(status).toBe(409);

  });

});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    // TODO
    const data = {
      email: "teste@gmail.com",
      password: "123456"
    }

    const user = await prisma.user.create({
      data
    })

    const {status, body} = await api.get(`/users/${user.id}`);
    expect(status).toBe(200);
    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        email: expect.any(String),
        password: expect.any(String)
      })
    );
  });

  it("should return 404 when can't find a user by id", async () => {
    // TODO
    const {status} = await api.get(`/users/3`);
    expect(status).toBe(404);
  });

  it("should return all users", async () => {

    await prisma.user.create({ 
      data: {
        email: "teste@gmail.com",
        password: "123456"
      }
    })

    await prisma.user.create({ 
      data: {
        email: "teste2@gmail.com",
        password: "123456"
      }
    })

    await prisma.user.create({ 
      data: {
        email: "teste3@gmail.com",
        password: "123456"
      }
    })
    // TODO
    const {status, body} = await api.get(`/users`);
    expect(status).toBe(200);
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: expect.any(String)
        })
      ])
    );
  });

})