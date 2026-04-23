import { UserBattle } from "@prisma/client";
import prisma from "../../../../prisma/client";

export const getUserBattle = async(
    userId: string,
    battleId: number
): Promise<UserBattle | null> => {
    const userBattle = await prisma.userBattle.findUnique({
        where: {
            userId_battleId: {
                userId: userId,
                battleId: battleId
            }
        }
    });

    if(!userBattle) {
        return null;
    } else {
        return userBattle;
    }
} 

export const createUserBattle =  async(
    userId: string,
    battleId: number
): Promise<UserBattle> => {
    const existingUserBattle = await prisma.userBattle.findUnique({
        where: {
            userId_battleId: {
                userId: userId,
                battleId: battleId
            }
        }
    });

    if(existingUserBattle) {
        throw new Error(`Term with id ${battleId} already associated with user with id ${userId}`);
    }

    const newUserBattle = await prisma.userBattle.create({
        data: {
            userId: userId,
            battleId: battleId
        }
    });

    return newUserBattle;
}

export const deleteUserBattle = async( 
    userId: string, 
    battleId: number
): Promise<void> => {
    await prisma.userBattle.delete({
        where: {
            userId_battleId: {
                userId: userId,
                battleId: battleId
            }
        }
    });
}