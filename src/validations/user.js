const Joi = require("joi");

exports.createUserSchema = Joi.object({
	email: Joi.string().email().min(5).max(200).required(),
	password: Joi.string().min(5).max(200).required(),
});
