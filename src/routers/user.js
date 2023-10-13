const express = require("express");
const router = express.Router();
const joiValidator = require("../middlewares/joi");
const { createUserSchema } = require("../validations/user");
const { createUser } = require("../controllers/user");

router.post("/", joiValidator.body(createUserSchema), createUser);

module.exports = router;
