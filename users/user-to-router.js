const express = require("express");
const users = require("./user-to-model");


const router = express.Router();

  router.get("/user/to/:id", (req, res) => {
    const id = req.params.id
    users
      .findById(id)
      .then(users => {
        res.send(users);
      })
      .catch(err => res.json(err));
  });

  router.put("/user/to/addData/:id", (req, res) => {
    const id = req.params.id
    users
      .update(req.body, id)
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        console.log(err)
        return res.json(err)
      });
  });

  router.post("/user/to/adddata", (req, res) => {
    users
      .add(req.body)
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        console.log(err)
        return res.json(err)
      });
  });

  module.exports = router