import {Request, Response, NextFunction} from "express";
import { errorResponse } from "../models/responseModel";

interface ExtendedError extends Error {
    code?: string;
    statusCode?: number;
}

const errorHandler = (
    err: ExtendedError,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {
    const statusCode = err.statusCode || 500;
    const code = err.code || "UNKNOWN_ERROR";

    // Ensure CORS header is always present, even on errors
    const origin = req.headers.origin;
    const allowedOrigins = [process.env.FRONTEND_URL];
    if (origin && allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
        res.setHeader("Access-Control-Allow-Credentials", "true");
    }

    console.error(`Error: ${err.message} (Code: ${code})`);

    res.status(statusCode).json(
        errorResponse(`An unexpected error occured: ${code}`)
    );
};

export default errorHandler;