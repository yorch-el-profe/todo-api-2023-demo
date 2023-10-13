const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:");

exports.sequelize = sequelize;

exports.connect = async function () {
	try {
		await sequelize.authenticate();
	} catch (e) {
		console.error("> No se pudo conectar con la base de datos");
		process.exit(1);
	}
};

exports.sync = async function () {
	try {
		await sequelize.sync();
	} catch (e) {
		console.error("> No se pudo sincronizar la base de datos");
		process.exit(1);
	}
};
