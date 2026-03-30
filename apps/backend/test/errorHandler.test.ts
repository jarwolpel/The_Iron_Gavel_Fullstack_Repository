import { Request, Response, } from "express";
import errorHandler from "../src/api/v1/middleware/errorHandler";
import { AuthenticationError, ServiceError } from "../src/api/v1/errors/errors";
import { HTTP_STATUS } from "../src/constants/httpConstants";

describe("errorHandler middleware", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: jest.Mock;
    let jsonMock: jest.Mock;
    let statusMock: jest.Mock;

    beforeEach(() => {
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnValue({ json: jsonMock });
        mockRequest = {};
        mockResponse = { status: statusMock };
        nextFunction = jest.fn();
    });

    it("should handle AuthenticationError with correct status and message", () => {
        // Arrange
        const error = new AuthenticationError("Invalid token", "TOKEN_INVALID");
        
        // Act
        errorHandler(
            error,
            mockRequest as Request,
            mockResponse as Response,
            nextFunction
        );
        
        // Assert
        expect(statusMock).toHaveBeenCalledWith(HTTP_STATUS.UNAUTHORIZED);
        expect(jsonMock).toHaveBeenCalledWith({
            status: "error",  
            error: {
                message: "Invalid token",
                code: "TOKEN_INVALID",
            },
            timestamp: expect.any(String),
        });
    });

    it("should handle generic Error with 500 status", () => {
        // Arrange
        const error = new Error("A generic error has occurred");
        
        // Act
        errorHandler(
            error,
            mockRequest as Request,
            mockResponse as Response,
            nextFunction
        );
        
        // Assert
        expect(statusMock).toHaveBeenCalledWith(HTTP_STATUS.INTERNAL_SERVER_ERROR);
        expect(jsonMock).toHaveBeenCalledWith({
            status: "error",
            error: {
                message: "An unexpected error occurred",
                code: "UNKNOWN_ERROR",
            },
            timestamp: expect.any(String),
        });
    });

    // it("should handle null error", () => {
    //     // Arrange
    //     const error = null;
        
    //     // Act
    //     errorHandler(
    //         error,
    //         mockRequest as Request,
    //         mockResponse as Response,
    //         nextFunction
    //     );
        
    //     // Assert
    //     expect(statusMock).toHaveBeenCalledWith(HTTP_STATUS.INTERNAL_SERVER_ERROR);
    //     expect(jsonMock).toHaveBeenCalledWith({
    //         status: "error",
    //         error: {
    //             message: "An unexpected error occurred",
    //             code: "UNKNOWN_ERROR",
    //         },
    //         timestamp: expect.any(String),
    //     });
    // });

    it("should handle ServiceError with custom status code", () => {
        // Arrange
        const error = new ServiceError(
            "Business rule has been violated",
            "BUSINESS_RULE_ERROR",
            HTTP_STATUS.BAD_REQUEST
        );
        
        // Act
        errorHandler(
            error,
            mockRequest as Request,
            mockResponse as Response,
            nextFunction
        );
        
        // Assert
        expect(statusMock).toHaveBeenCalledWith(HTTP_STATUS.BAD_REQUEST);
        expect(jsonMock).toHaveBeenCalledWith({
            status: "error",
            error: {
                message: "Business rule has been violated",
                code: "BUSINESS_RULE_ERROR",
            },
            timestamp: expect.any(String),
        });
    });
});