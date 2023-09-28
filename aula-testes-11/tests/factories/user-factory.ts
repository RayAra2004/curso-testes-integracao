import prisma from "database";
import { UserInput } from "repository";

async function createUser(data:UserInput) {
    return await prisma.user.create({
        data
    });
}


export const userFactory = {
    createUser
}