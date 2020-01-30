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
      users.string("live-in", 150).notNullable()
      users.string("move-to", 150).notNullable()
      users.integer("monthly-income").notNullable()
      users.integer("#-of-adults").notNullable()
      users.integer("#-of-children").notNullable()
    })
  };
  
  exports.down = async knex => {
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("user data");
  };
