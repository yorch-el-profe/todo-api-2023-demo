require("dotenv").config();

const { initDatabase } = require("./db");
initDatabase();

const express = require("express");
const app = express();

app.listen(process.env.SERVER_PORT || 3000, function () {
	console.log("> Servidor escuchando peticiones");
});
