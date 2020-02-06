const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const userRouter = require("./users/user-router")
const userOriginRouter = require("./users/user-origin-router")

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', userRouter);
server.use('/', userOriginRouter);



  server.get("/api", (req, res) => {
    res.send("server up and running");
  });


module.exports = server;