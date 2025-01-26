import { errorMessages } from "@/common/const/errorMessage";
import Joi from "joi";

export const validationCreateTask = Joi.object({
    title: Joi.string().min(8).max(100).trim().required().messages(errorMessages.create)
})