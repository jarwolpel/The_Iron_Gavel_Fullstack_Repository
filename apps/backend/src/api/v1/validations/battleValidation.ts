import Joi, { ObjectSchema } from "joi";
 
export const battleSchema: ObjectSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty"
    }),
    description: Joi.string().required().messages({
        "any.required": "Description is required",
        "string.empty": "Description cannot be empty"
    }),
    characters: Joi.array().items(Joi.string()).required().messages({
        "any.required": "Exactly two characters are required",
        "array.base": "Characters must be an array of strings"
    }),
});