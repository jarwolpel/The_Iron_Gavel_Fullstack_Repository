import { Request, Response, NextFunction } from "express";
import * as credentialService from "../services/credentialService";
import { successResponse } from "../models/responseModel";
import type { Credential } from "../types/userCredentials";



export const getAllCredentials = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const credentials: Credential[] = await credentialService.fetchAllCredentials();

        res.status(200).json(
            successResponse(credentials)
        );
    } catch (error) {
        next(error);
    }
};

export const getCredentialById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        // This might not work
        const id = req.params.id as string;
        
        const credential: Credential | null = 
            await credentialService.fetchCredentialById(Number.parseInt(id));

        res.json(successResponse(credential));
    } catch (error) {
        next(error);
    }
};

export const createNewCredential = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newCredential = await credentialService.createCredential(req.body);
        res.status(201).json(successResponse(newCredential, "Created new user account"));
    } catch(error) {
        next(error);
    }
};