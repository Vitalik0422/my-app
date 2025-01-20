import Joi from "joi";

export const validationCreateTask = Joi.object({
    title: Joi.string().min(8),
    text: Joi.string() 
})