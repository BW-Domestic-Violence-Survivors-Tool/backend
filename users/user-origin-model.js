const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

function find() {
  return db("users as u")
    .join("monthly costs as m")
    .select(
      "u.id",
      "u.username",
      "m.monthlyIncome",
      "m.transportation",
      "m.food",
      "m.healthInsurance",
      "m.car",
      "m.carInsurance",
      "m.loans",
      "m.other"
    )
}

function findById(id) {
  return db("users")
    .where({ id })
    .select("id", "username", "password");
}


function findBy(filter) {
    return db("users")
      .where(filter)
      .select("id", "username", "password");
  }

function add(input) {
    const [data] = db("monthly costs").insert(input)
    return find()
}

module.exports = {
  find,
  findBy,
  findById,
  add,
};
