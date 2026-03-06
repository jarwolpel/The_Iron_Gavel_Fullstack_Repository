import { PrismaClient } from "@prisma/client";
import { characterSeedData } from "./seedData";

const prisma = new PrismaClient();

// this method will add default values to the database
// IT WILL CLEAR THE DB WHEN INVOKED
// see https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding
async function main() {
    // clear table
    await prisma.characters.deleteMany();

    // insert characters to db
    const createManyCharacters = await prisma.characters.createManyAndReturn(
        {
            data: characterSeedData,
            skipDuplicates: true
        }
    );

    console.log(`CREATED CHARACTERS: ${createManyCharacters}`);
};

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 