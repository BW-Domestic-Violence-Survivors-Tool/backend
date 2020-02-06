const db = require("../data/db-config");

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
    .select("id", "username");
}

function update(data, id) {
  return db("relocation costs").where({ id })
    .update(data)
    .then(res => {
      return findById(id)
    });
}

function add(data) {
  return db("relocation costs").instert(data)
    .insert(data)
    .then(res => {
      return findById(id);
    });
}

module.exports = {
  findBy,
  findById,
  update,
  add,
};
