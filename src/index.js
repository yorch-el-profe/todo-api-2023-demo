require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const authRouter = require("./routers/auth");

app.use("/users", userRouter);
app.use("/tasks", taskRouter);
app.use("/auth", authRouter);

app.listen(process.env.SERVER_PORT || 3000, function () {
	console.log("> Servidor escuchando peticiones");
});
