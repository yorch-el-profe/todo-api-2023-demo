const express = require("express");
const router = express.Router();
const jwtValidator = require("../middlewares/passport");
const { createTask, findTasks } = require("../controllers/task");

router.post("/", jwtValidator, createTask);

router.get("/", jwtValidator, findTasks);

module.exports = router;
