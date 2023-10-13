const User = require("../models/user");
const { hash } = require("./security");

exports.save = async function (data) {
	data.password = await hash(data.password);
	const user = await User.create(data);
	delete user.dataValues.password;
	return user;
};

exports.findOneByEmail = async function (email) {
	return User.findOne({
		where: {
			email,
		},
	});
};
