const Joi = require('joi');


const Schema = {
    message: Joi.object({
        name: Joi.string().required().replace(/<[^>]*>/,""),
        email: Joi.string().email().required().replace(/<[^>]*>/,""),
        message: Joi.string().replace(/<[^>]*>/,""),
    })
}

module.exports = Schema;