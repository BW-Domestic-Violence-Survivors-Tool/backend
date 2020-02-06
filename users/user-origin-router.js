const express = require("express");
const users = require("./user-origin-model");

const router = express.Router();

  router.get("/user/:id", (req, res) => {
    const id = req.params.id
    users
      .findById(id)
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        console.log(err)
        return res.json(err)
      });
  });

  router.put("/user/addData/:id", (req, res) => {
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

  router.post("/user/addData", (req, res) => {
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

  module.exports = router;