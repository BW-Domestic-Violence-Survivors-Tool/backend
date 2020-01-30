exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Rachel', password: 'abc123'},
        {id: 2, username: 'Alorah', password: 'cba321'},
        {id: 3, username: 'Jessica',password: 'a1b2c3'}
      ]);
    });
};
