exports.up = async knex => {
    await knex.schema.createTable("users", users => {
      users.increments();
      users
        .string("username", 128)
        .notNullable()
        .unique();
      users.string("password", 128).notNullable();
    });
    await knex.schema.createTable("user data", users => {
      users.integer("monthly-income").notNullable()
      users.integer("transportation").notNullable()
      users.integer("food").notNullable()
      users.integer("health-insurance").notNullable()
      users.integer("car").notNullable()
      users.integer("car-insurance", 150).notNullable()
      users.integer("loans", 150).notNullable()
      users.integer("other", 150)
    })
    await knex.schema.createTable("user move to", users => {
      users.integer("hotel-costs")
      users.integer("new-rental-deposit").notNullable()
      users.integer("connect-utilities").notNullable()
      users.integer("storage-unit")
      users.integer("new-monthly-rent").notNullable()
      users.integer("car-rental-and-gas")
      users.integer("cell-phone")
      users.integer("moving-truck")
      users.integer("gas-for-moving-truck")
      users.integer("mental-health-treatment")
      users.integer("income-loss")
      users.integer("additional-security-measures")
    })
  };
  
  exports.down = async knex => {
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("user data");
    await knex.schema.dropTableIfExists("user move to");
  };
