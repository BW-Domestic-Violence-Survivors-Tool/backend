const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const secret = require("./config/secrets");
const users = require("./user-model");
const validateToken = require('./config/auth-middleware');

const router = express.Router();

function generateToken(user) {
  const payload = {
    user: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

router.get("/users", validateToken, (req, res) => {
  users
    .find()
    .then(users => {
      res.send(users);
    })
    .catch(err => res.json(err));
});
router.post("/register", async (req, res, next) => {
  try {
    const saved = await users.add(req.body);
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await users.findBy({ username }).first();
    const passwordValid = await bcrypt.compare(password, user.password);
    if (user && passwordValid) {
      const token = generateToken(user);
      console.log(token)
      res.status(200).json({
        token,
        message: `Welcome ${user.username}!`
      });
    } else {
      res.status(401).json({
        message: "Invalid Credentials"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id
  users
    .remove(id)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      console.log(err)
      return res.json(err)
    });
});
module.exports = router;