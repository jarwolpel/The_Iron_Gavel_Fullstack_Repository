import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

import { MiddlewareFunction, RequestData } from "../types/express";

// validate method provided by Joi package=
export const validate = <T>(schema: ObjectSchema<T>, data:T): void => {
    const { error } = schema.validate(data, {abortEarly: false});

    if(error) {
        throw new Error(
            `Validation error: ${
                error.details.map(x => x.message)
                .join(", ")
            }`
        );
    }
};

// run validate method against received data
// provided as middleware function
export const validateRequest = (schema: ObjectSchema): MiddlewareFunction => {
    return(req: Request, res: Response, next: NextFunction) => {
        try {
            const data: RequestData = {
                body: req.body,
                params: req.params as Record<string, string>,
                query: req.query as Record<string, string | string[]>
            };
            validate(schema, data);
            next();
        } catch(error) {
            res.status(400).json({error: (error as Error).message});
        } 
    };
};