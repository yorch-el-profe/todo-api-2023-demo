const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.hash = async function (text) {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(text, salt);
};

exports.compare = async function (text, hash) {
	return bcrypt.compare(text, hash);
};

exports.sign = function (payload) {
	return jwt.sign(payload, process.env.JWT_SECRET);
};
