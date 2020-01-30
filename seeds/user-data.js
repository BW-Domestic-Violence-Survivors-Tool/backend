
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user data').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user data').insert([
        {"live-in": "California", "move-to": 'Utah', "monthly-income": 3500, "#-of-adults": 1, "#-of-children": 2},
        {"live-in": "Arizona", "move-to": 'Ohio', "monthly-income": 1200, "#-of-adults": 1, "#-of-children": 0},
        {"live-in": "Maine", "move-to": 'Iowa', "monthly-income": 6200, "#-of-adults": 1, "#-of-children": 1},

      ]);
    });
};
