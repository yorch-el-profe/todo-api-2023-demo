const Task = require("../models/task");

exports.save = function (data) {
	return Task.create(data);
};

exports.findByUser = function (userId) {
	return Task.findAll({
		where: {
			userId,
		},
	});
};
