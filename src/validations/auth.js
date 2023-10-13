const Joi = require("joi");

exports.loginSchema = Joi.object({
	email: Joi.string().email().min(5).max(200).required(),
	password: Joi.string().min(5).max(200).required(),
});
