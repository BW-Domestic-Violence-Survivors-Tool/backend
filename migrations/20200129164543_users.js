exports.up = async knex => {
  await knex.schema.createTable("users", users => {
    users.increments()
    users
      .string("username", 128)
      .notNullable()
      .unique()
    users.string("password", 128).notNullable()
  });
  await knex.schema.createTable("monthly costs", users => {
    users.increments()
    users
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
    users.integer("monthlyIncome").notNullable()
    users.integer("transportation").notNullable()
    users.integer("food").notNullable()
    users.integer("healthInsurance")
    users.integer("car")
    users.integer("carInsurance")
    users.integer("loans")
    users.integer("other")
  });
  await knex.schema.createTable("relocation costs", users => {
    users.increments()
    users
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
    users.integer("hotelCosts")
    users.integer("newRentalDeposit").notNullable()
    users.integer("connectUtilities").notNullable()
    users.integer("storageUnit")
    users.integer("newMonthlyRent").notNullable()
    users.integer("carRentalAndGas")
    users.integer("cellPhone")
    users.integer("movingTruck")
    users.integer("gasForMovingTruck")
    users.integer("mentalHealthTreatment")
    users.integer("incomeLoss")
    users.integer("additionalSecurityMeasures")
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("relocation costs");
  await knex.schema.dropTableIfExists("monthly costs");
  await knex.schema.dropTableIfExists("users");

};

