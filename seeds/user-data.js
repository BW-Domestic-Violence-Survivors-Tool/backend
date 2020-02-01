exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("monthly costs")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("monthly costs").insert([
        {
          "userId": 1,
          "monthlyIncome": 4000,
          "transportation": 100,
          "food": 300,
          "healthInsurance": 120,
          "car": 200,
          "carInsurance": 60,
          "loans": 250,
          "other": 100
        },
        {
          "userId": 2,
          "monthlyIncome": 1500,
          "transportation": 20,
          "food": 150,
          "healthInsurance": 200,
          "car": 400,
          "carInsurance": 100,
          "loans": 50,
          "other": 10
        },
        {
          "userId": 3,
          "monthlyIncome": 2000,
          "transportation": 50,
          "food": 400,
          "healthInsurance": 100,
          "car": 100,
          "carInsurance": 20,
          "loans": 100,
          "other": 50
        }
      ]);
    });
};
