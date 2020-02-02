const express = require("express");
const users = require("./user-origin-model");

const router = express.Router();

router.get("/user/origin", (req, res) => {
    users
      .find()
      .then(users => {
        res.send(users);
      })
      .catch(err => res.json(err));
  });

  

  router.post("/user/origin/addData", (req, res) => {
    users
      .add()
      .then(users => {
        res.send(users);
      })
      .catch(err => res.json(err));
  });

  module.exports = router;