const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

function find() {
  return db("users as u").select("u.id", "u.username");
}

function findById(id) {
  console.log(id);
  return db("users as u")
    .leftJoin("relocation costs as r", "u.id", "=", "r.userId")
    .select(
      "u.id",
      "u.username",
      "r.hotelCosts",
      "r.newRentalDeposit",
      "r.connectUtilities",
      "r.storageUnit",
      "r.newMonthlyRent",
      "r.carRentalAndGas",
      "r.cellPhone",
      "r.movingTruck",
      "r.gasForMovingTruck",
      "r.mentalHealthTreatment",
      "r.incomeLoss",
      "r.additionalSecurityMeasures"
    )
    .where("u.id", id);
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "username", "password");
}

function add(data) {
  return db("relocation costs")
    .insert(data)
    .then(res => {
      return findById(id);
    });
}
module.exports = {
  find,
  findBy,
  findById,
  add
};
