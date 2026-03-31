import Joi, { ObjectSchema } from "joi";

// Validate GET /characters/:id
export const getCharacterByIdSchema: ObjectSchema = Joi.object({
    params: Joi.object({
        id: Joi.number().integer().positive().required().messages({
            "any.required": "Character ID is required",
            "number.base": "Character ID must be a number",
            "number.integer": "Character ID must be an integer",
            "number.positive": "Character ID must be greater than 0",
        }),
    }),
});

// Validate GET /characters/search?q=<query>
export const searchCharactersSchema = Joi.object({
    q: Joi.string().allow("").optional().messages({
        "string.base": "Search query must be a string",
    }),
});
