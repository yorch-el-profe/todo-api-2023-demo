const { save, findByUser } = require("../services/task");

exports.createTask = async function (request, response) {
	const { content } = request.body;
	const { id } = request.user;

	const task = await save({ content, userId: id });

	response.status(201).json(task);
};

exports.findTasks = async function (request, response) {
	const { id } = request.user;

	const tasks = await findByUser(id);

	response.status(200).json(tasks);
};
