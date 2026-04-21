import { Request, Response, NextFunction } from "express";
import * as battleService from "../services/battleService";
import { successResponse } from "../models/responseModel";
// import { Battles } from "@prisma/client";
import { toFrontendBattle } from "../types/toFrontendBattle";
import { BattleWithUsers } from "../types/battleWithUsers";
import { FrontendBattle } from "@shared/types/frontend-battle"

/**
 * Controller methods define how to handle requests and respond to requests.
 * It sends the appropriate components of the request to services (if needed)
 * and responds to the request with an appropriate code/body.
 */

export const getAllBattles = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const userId = req.userId;
        
        const battles = await battleService.fetchAllBattles();
        
        const frontendBattles: FrontendBattle[] = battles.map(b =>
            toFrontendBattle(b, userId)
        );

        res.status(200).json(
            successResponse(frontendBattles, "Battles retrieved succesfully")
        );
    } catch (error) {
        // errorHandler middleware will always be the last to catch error throws
        next(error);
    }
};

export const getBattleById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const battle: BattleWithUsers | null = 
            await battleService.getBattleById(Number.parseInt(req.params.id as string));
        if(battle) {
            const userId = req.userId;
            const responseBattle = toFrontendBattle(battle, userId);
            res.json(successResponse(responseBattle, "Battle retrieved succesfully"));
        } else{
            throw new Error("Battle not found");
        }
    } catch(error) {
        next(error);
    }
}

export const createBattle = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newBattle = await battleService.createBattle(req.body);
        const responseBattle = toFrontendBattle(newBattle as BattleWithUsers);
        res.status(201)
            .json(successResponse(responseBattle, "Battle created succesfully"));
    } catch(error) {
        next(error);
    }
};

export const updateBattle = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedBattle = await battleService.updateBattle(
            Number.parseInt(req.params.id as string),
            req.body
        );
        res.status(200)
            .json(successResponse(updatedBattle, "Battle updated succesfully"));
    } catch(error) {
        next(error);
    }
};

export const deleteBattle = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await battleService.deleteBattle(Number.parseInt(req.params.id as string));
        res.status(200)
            .json(successResponse(null, "Battle deleted succesfully"));
    } catch(error) {
        next(error);
    }
};