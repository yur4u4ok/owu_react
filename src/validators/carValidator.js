import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'Min value is 0'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export{
    carValidator
}
