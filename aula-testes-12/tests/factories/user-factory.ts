import { faker } from "@faker-js/faker";
import prisma from "../../src/database";
import { UserInput } from "../../src/repository";

export async function buildUser() {
  const userData: UserInput = {
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  const user = await prisma.user.create({ data: userData });
  return user;
}