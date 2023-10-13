const { createValidator } = require("express-joi-validation");

module.exports = createValidator({
	passError: true,
});
