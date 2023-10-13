const { save } = require("../services/user");

exports.createUser = async function (request, response) {
	const { email, password } = request.body;
	const user = await save({ email, password });
	response.status(201).json(user);
};
