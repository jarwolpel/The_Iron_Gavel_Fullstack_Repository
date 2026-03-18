import Joi, { ObjectSchema} from "joi";


export const getCredentialsByIdSchema: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "Credential ID is required",
        "string.empty": "Credential ID cannot be blank"
    })
}); 

export const postCredentials: ObjectSchema = Joi.object({
    username: Joi.string().required().messages({
        "any.required": "Credential username is required",
        "string.empty": "Credential username cannot be blank"
    }),
    password: Joi.string().required().messages({
        "any.required": "Credential password is required",
        "string.empty": "Credential password cannot be blank"
    }),
    email: Joi.string().required().messages({
        "any.required": "Credential email is required",
        "string.empty": "Credential email cannot be blank"
    }),
});

export const deleteCredential: ObjectSchema = Joi.object({
    id: Joi.string().required().messages({
        "any.required": "Credential ID is required",
        "string.empty": "Credential ID cannot be blank"
    })
});