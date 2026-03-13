import Joi, { ObjectSchema } from "joi";

// define the correct shape of a term object received in JSON
// Require a title and definition string at minimum
export const battleSchema: ObjectSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty"
    }),
    description: Joi.string().required().messages({
        "any.required": "Description is required",
        "string.empty": "Description cannot be empty"
    }),
    characters: Joi.string().required().messages({
        "any.required": "Exactly two characters are required",
        "string.empty": "Please select two characters"
    }),
});