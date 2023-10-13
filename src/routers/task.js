const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const joiValidator = require("../middlewares/joi");
const { createTaskSchema } = require("../validations/task");
const { createTask, findTasks } = require("../controllers/task");

router.post("/", jwtValidator, joiValidator.body(createTaskSchema), createTask);

router.get("/", jwtValidator, findTasks);

module.exports = router;
