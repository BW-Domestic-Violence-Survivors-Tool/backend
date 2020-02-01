exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Rachel', password: 'abc123'},
        {username: 'Alorah', password: 'cba321'},
        {username: 'Jessica',password: 'a1b2c3'}
      ]);
    });
};
