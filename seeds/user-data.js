
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user data').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user data').insert([
        {"monthly-income": 4000, "transportation": 100, "food": 300, "health-insurance": 120, "car": 200, "car-insurance": 60, "loans": 250, "other": 100},
        {"monthly-income": 1500, "transportation": 20, "food": 150, "health-insurance": 200, "car": 400, "car-insurance": 100, "loans": 50, "other": 10},
        {"monthly-income": 2000, "transportation": 50, "food": 400, "health-insurance": 100, "car": 100, "car-insurance": 20, "loans": 100, "other": 50},
      ]);
    });
};
