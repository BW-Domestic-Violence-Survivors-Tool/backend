const bcrypt = require("bcryptjs")

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Rachel', password: `${bcrypt.hashSync("password", 10)}`},
        {username: 'Alorah', password: `${bcrypt.hashSync("password", 10)}`},
        {username: 'Jessica',password: `${bcrypt.hashSync("password", 10)}`},
        {username: 'abc',      password: `${bcrypt.hashSync("password", 10)}`}
      ]);
    });
};
