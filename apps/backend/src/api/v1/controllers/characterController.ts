import { Request, Response, NextFunction } from "express";
import { Characters } from "@prisma/client";
import * as characterService from "../services/characterServices";
import { successResponse } from "../models/responseModel";

/**
 * Controller methods for fetching characters
 * Used by CharacterSelect to display and search characters
 */

export const getAllCharacters = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const characters: Characters[] = await characterService.getAllCharacters();
        res.status(200).json(
        successResponse(characters, "Characters retrieved successfully")
        );
    } catch (error) {
        next(error);
    }
};

export const searchCharacters = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const query = req.query.q as string;
        const results: Characters[] = await characterService.searchCharacters(query);
        res.json(successResponse(results, "Search results retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getCharacterById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Number(req.params.id);

        if (!req.params.id || isNaN(id)) {
            res.status(400).json(
                successResponse(null, "Invalid character ID")
            );
            return;
        }

        const character: Characters | null =
            await characterService.getCharacterById(id);

        if (!character) {
            res.status(404).json(
                successResponse(null, "Character not found")
            );
            return;
        }

        res.status(200).json(
            successResponse(character, "Character retrieved successfully")
        );

    } catch (error) {
        next(error);
    }
};