const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const userRouter = require("./users/user-router")

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', userRouter);

  server.get("/api", (req, res) => {
    res.send("server up and running");
  });


module.exports = server;