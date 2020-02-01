const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

function find() {
    return db("users as u").join("monthly costs as m").select("u.id", "u.username", "m.monthlyIncome", "m.transportation", "m.food", "m.healthInsurance", "m.car", "m.carInsurance", "m.loans", "m.other");
  }

  module.exports = {
      find,
  }