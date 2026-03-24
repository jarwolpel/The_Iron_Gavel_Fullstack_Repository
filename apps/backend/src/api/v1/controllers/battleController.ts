import { Request, Response, NextFunction } from "express";
import { Battles } from "@prisma/client";
import * as battleService from "../services/battleService";
import { successResponse } from "../models/responseModel";

/**
 * Controller methods define how to handle requests and respond to requests.
 * It sends the appropriate components of the request to services (if needed)
 * and responds to the request with an appropriate code/body.
 */

export const getAllBattles = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        const battles = await battleService.fetchAllBattles();
        res.status(200).json(
            successResponse(battles, "Battles retrieved succesfully")
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
        const battle: Battles | null = 
            await battleService.getBattleById(Number.parseInt(req.params.id as string));
        if(battle) {
            res.json(successResponse(battle, "Battle retrieved succesfully"));
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
        res.status(201)
            .json(successResponse(newBattle, "Battle created succesfully"));
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