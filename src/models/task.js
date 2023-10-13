const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("tasks", {
	content: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			len: [5, 2500],
		},
	},
	isCompleted: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
		field: "is_completed",
		allowNull: false,
	},
});
