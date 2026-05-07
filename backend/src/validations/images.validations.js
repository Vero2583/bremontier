import Joi from 'joi'

export const imagesSchema = Joi.object({
    nom: Joi.string(),
    alt: Joi.string()
});

