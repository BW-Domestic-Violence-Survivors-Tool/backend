const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

function find() {
  return db("users as u")
    .select(
      "u.id",
      "u.username"
    );
}

function findById(id) {
  console.log(id);
  return db("users as u")
    .leftJoin("monthly costs as m", "u.id", "=", "m.userId")
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
    .where("u.id", id);
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "username", "password");
}

function add(data) {
  return  db("monthly costs").insert(data)
  .then(res => {
    return findById(id)
  })
}



module.exports = {
  find,
  findBy,
  findById,
  add
};
//  monthlyIncome: req.body.monthlyIncome,
// transportation: req.body.transportation,
// food: req.body.food,
// healthInsurance: req.body.healthInsurance,
// car: req.body.car,
// carInsurance: req.body.carInsurance,
// loans: req.body.loans,
// other: req.body.other