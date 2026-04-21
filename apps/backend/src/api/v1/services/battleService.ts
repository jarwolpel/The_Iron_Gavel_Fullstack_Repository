import { Battles } from "@prisma/client";
import prisma from "../../../../prisma/client";
import { BattleWithUsers } from "../types/battleWithUsers";

/**
 * Services access data as necessary from the Prisma client. They invoke
 * methods on the ORM, which will send queries to the database and respond
 * with data needed.
 * 
 * More general info on Prisma: https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest
 */
export const fetchAllBattles = async(userId?: string | null): Promise<BattleWithUsers[]> => {
    if (userId) {
        return prisma.battles.findMany({
            where: {
                userBattles: {
                    some: { userId: userId }
                }
            },
            include: { userBattles: true }
        });
    }
    // unauthenticated users get no battles
    return [];
}

export const getBattleById = async(id: number): Promise<BattleWithUsers | null> => {
    try {
        const battle = await prisma.battles.findUnique({
            where: {
                id: id
            },
            include: {
                userBattles: true
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
    characters?: string[],
    isSaved?: boolean
}, userId: string): Promise<BattleWithUsers> => {
    const newBattle = await prisma.battles.create({
        data: {
            characters: [],
            ...battleData,
            // If isSaved, simultaneously create the UserBattle join record
            ...(battleData.isSaved && {
                userBattles: {
                    create: { userId }
                }
            })
        },
        include: { userBattles: true }
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