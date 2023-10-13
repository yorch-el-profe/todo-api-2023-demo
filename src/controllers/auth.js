const { authenticate } = require("../services/auth");
const AuthException = require("../exceptions/auth");

exports.login = async function (request, response) {
	const { email, password } = request.body;

	try {
		const token = await authenticate({ email, password });
		response.status(200).json({
			token,
		});
	} catch (e) {
		if (e instanceof AuthException) {
			return response.status(400).json({
				code: "ERR_AUTH",
				message: "Email o contraseña incorrectos",
			});
		}

		throw e;
	}
};
