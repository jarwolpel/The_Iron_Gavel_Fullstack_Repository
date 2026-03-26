// Use the Character type defined in prisma/schema.prisma
import { Characters } from "@prisma/client";
// initialize a prisma client if not already and use in queries here
import prisma from "../../../../prisma/client";

/**
 * Services access data as necessary from the Prisma client. They invoke
 * methods on the ORM, which will send queries to the database and respond
 * with data needed.
 */

// Get all characters
export const getAllCharacters = async (): Promise<Characters[]> => {
  return prisma.characters.findMany();
};

// Get a single character by ID
export const getCharacterById = async (id: number): Promise<Characters | null> => {
  try {
    const character = await prisma.characters.findUnique({
      where: { id: id },
    });

    if (!character) {
      return null;
    } else {
      return character;
    }
  } catch (error) {
    throw new Error(`Failed to fetch character with id ${id}`);
  }
};

// Search characters by name
export const searchCharacters = async (query: string): Promise<Characters[]> => {
    try {
        return await prisma.characters.findMany({
            where: { name: { contains: query, mode: "insensitive" } },
        });
    }   catch (error) {
        throw new Error(`Failed to search characters with query "${query}"`);
    }
};