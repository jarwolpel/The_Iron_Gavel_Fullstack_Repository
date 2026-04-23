import { Request, Response, NextFunction } from "express";
import * as userBattleService from "../services/userBattleService";
import { successResponse } from "../models/responseModel";
import { UserBattle } from "@prisma/client";

// Users add favourites by creating a new middle table record
export const createUserBattle = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if(req.userId) {
            const newUserBattle: UserBattle = await userBattleService.createUserBattle(
                req.userId,
                Number.parseInt(req.params.battleId as string)
            );
            res.status(201)
                .json(successResponse(newUserBattle, "New UserBattle created succesfully"));
        } else {
            throw new Error("User not found");
        }
    } catch(error) {
        next(error);
    }
}

export const deleteUserBattle = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        if(req.userId) {
            await userBattleService.deleteUserBattle(
                req.userId,
                Number.parseInt(req.params.battleId as string)
            );
            res.status(200)
                .json(successResponse(null, "UserBattle deleted succesfully"));
        } else {
            throw new Error("User not found");
        }
    } catch(error) {
        next(error);
    }
}