/*
Some Errors here are for FireStore, we will have to update for Neon Database
*/

import { HTTP_STATUS } from "../../../constants/httpConstants";

/**
 * Base error class for application errors.
 * Extends the built-in Error class to include an error code and status code.
 *
 * This abstract class provides:
 * - Consistent error structure across the application
 * - HTTP status codes for proper REST API responses
 * - Error codes for programmatic error handling
 * - Proper prototype chain setup for instanceof checks
 */
export class AppError extends Error {
    /**
     * Creates a new AppError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(
        public message: string,
        public code: string,
        public statusCode: number
    ) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Class representing a repository error.
 * Extends AppError to include database and data access specific errors.
 * Used for Firestore operations, connection issues, and data integrity problems.
 */
export class RepositoryError extends AppError {
    constructor(
        message: string,
        code: string,
        statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR
    ) {
        super(message, code, statusCode);
    }
}

/**
 * Class representing a service error.
 * Extends AppError to include business logic specific errors.
 * Used for validation failures, business rule violations, and processing errors.
 */
export class ServiceError extends AppError {
    constructor(
        message: string,
        code: string = "SERVICE_ERROR",
        statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR
    ) {
        super(message, code, statusCode);
    }
}

/**
 * Class representing an authentication error.
 * Extends AppError to include token verification and user identity errors.
 * Used for invalid tokens, expired tokens, and missing authentication.
 */
export class AuthenticationError extends AppError {
    constructor(
        message: string,
        code: string = "AUTHENTICATION_ERROR",
        statusCode: number = HTTP_STATUS.UNAUTHORIZED
    ) {
        super(message, code, statusCode);
    }
}

/**
 * Class representing an authorization error.
 * Extends AppError to include role-based access control errors.
 * Used for insufficient permissions and role validation failures.
 */
export class AuthorizationError extends AppError {
    constructor(
        message: string,
        code: string = "AUTHORIZATION_ERROR",
        statusCode: number = HTTP_STATUS.FORBIDDEN
    ) {
        super(message, code, statusCode);
    }
}