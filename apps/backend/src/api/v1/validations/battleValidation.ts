import Joi, { ObjectSchema } from "joi";

// import Joi from "joi";
// export const battleSchema = Joi.object({
//     body: Joi.object({
//         name: Joi.string(),
//         description: Joi.string(),
//         characters: Joi.array().items(Joi.string()),
//         isSaved: Joi.boolean(),   // add this
//     }),
//     params: Joi.object({
//         id: Joi.string(),
//     }),
//     query: Joi.object(),
// });
export const battleSchema: ObjectSchema = Joi.object({
    body: Joi.object({
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
        isSaved: Joi.boolean(),
    }),
    params: Joi.object({
        id: Joi.string(),
    }),
    query: Joi.object(),
});