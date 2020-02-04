const bcrypt = require("bcryptjs");
const db = require("../data/db-config");

function find() {
    return db("users")
  }

  function findById(id) {
    return db("users as u ").join("relocation costs as r")
    .select(
          "u.id",
          "u.username",
          "r.userId",
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
          "r.additionalSecurityMeasures",
    )
    .where({ id })
  }

module.exports = {
    find,
    findById,
}