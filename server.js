const express = require("express");
const helmet = require("helmet");

const server = express();

const cohortsRouter = require("./cohorts/cohorts.router");
const studentsRouter = require("./students/student-router");

server.use(helmet());
server.use(express.json());

server.use("/api/cohorts", cohortsRouter);
server.use("/api/students", studentsRouter);

server.get("/", (req, res) => {
  res.send({ message: "Hello - Welcome to Querying Data, Migrations and Seeding" });
});

module.exports = server;
