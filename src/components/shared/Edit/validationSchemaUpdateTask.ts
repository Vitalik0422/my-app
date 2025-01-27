import { errorMessages } from "@/common/const/errorMessage";
import Joi from "joi";

export const validationUpdateTask = Joi.object({
    id: Joi.string(),
    title: Joi.string().min(8).max(100).trim().required().messages(errorMessages.create)
})