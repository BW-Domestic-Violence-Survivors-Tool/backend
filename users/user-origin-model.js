const db = require("../data/db-config");

function findById(id) {
  console.log(id);
  return db("users as u")
    .leftJoin("budget review as m", "u.id", "=", "m.userId")
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
        "m.other",
        "m.hotelCosts",
        "m.newRentalDeposit",
        "m.connectUtilities",
        "m.storageUnit",
        "m.newMonthlyRent",
        "m.carRentalAndGas",
        "m.cellPhone",
        "m.movingTruck",
        "m.gasForMovingTruck",
        "m.mentalHealthTreatment",
        "m.incomeLoss",
        "m.additionalSecurityMeasures"
    )
    .where("u.id", id);
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "username");
}

function update(data, id) {
  return db("budget review").where({ id })
    .update(data)
    .then(res => {
      return findById(id)
    });
}

function add(data) {
  return  db("budget review").insert(data)
  .then(res => {
    return findById(id)
  })
}

module.exports = {
  findById,
  findBy,
  update,
  add,
}