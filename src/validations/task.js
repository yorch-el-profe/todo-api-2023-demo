const Joi = require("joi");

exports.createTaskSchema = Joi.object({
	content: Joi.string().min(5).max(2500).required(),
});
