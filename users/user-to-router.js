const express = require("express");
const users = require("./user-to-model");


const router = express.Router();

router.get("/user/to", (req, res) => {
    users
      .find()
      .then(users => {
        res.send(users);
      })
      .catch(err => res.json(err));
  });

  router.get("/user/to/:id", (req, res) => {
    const id = req.params.id
    // const body = req.params.body
    users
      .findById(id)
      .then(users => {
        res.send(users);
      })
      .catch(err => res.json(err));
  });

  module.exports = router