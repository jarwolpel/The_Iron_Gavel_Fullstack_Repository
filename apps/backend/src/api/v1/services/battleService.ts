// Use the battle type defined in prisma/schema.prisma
import { Battles } from "@prisma/client";
// initialize a prisma client if not already and use in queries here
import prisma from "../../../../prisma/client";

/**
 * Services access data as necessary from the Prisma client. They invoke
 * methods on the ORM, which will send queries to the database and respond
 * with data needed.
 * 
 * More general info on Prisma: https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest
 */
export const fetchAllBattles = async(): Promise<Battles[]> => {
    // get all records in the battle table
    return prisma.battles.findMany();
}

export const getBattleById = async(id: number): Promise<Battles | null> => {
    try {
        // get first record that match the "where" object key/value pairs
        const battle = await prisma.battles.findUnique({
            where: {
                id: id
            }
        });

        if(!battle) {
            return null;
        } else{
            return battle;
        }
    } catch(error) {
        throw new Error(`Failed to fetch battle with id ${id}`);
    }
}

export const createBattle = async(battleData: {
    name: string,
    description: string,
    characters?: string[]
}): Promise<Battles> => {
    // create a new battle with battleData as its column values, except for isFavourite as false
    const newBattle: Battles = await prisma.battles.create({
        data: {
            characters: [],
            ...battleData
        }
    });

    return newBattle;
}

export const updateBattle = async(
    id: number,
    battle: {name: string, description: string, characters: string[] }
): Promise<Battles> => {
    // find a battle where the id matches the id parameter, and update with the battle argument for values
    const updateBattle = await prisma.battles.update({
        where: {
            id: id
        },
        data: {
            ...battle
        }
    });
    return updateBattle;
}

export const deleteBattle = async(id: number): Promise<void> => {
    // delete the battle that matches the where key/value pairs
    await prisma.battles.delete({
        where: {
            id: id
        }
    });
}