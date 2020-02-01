exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user move to")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("user move to").insert([
        {
          "hotel-costs": 300,
          "new-rental-deposit": 200,
          "connect-utilities": 20,
          "storage-unit": 250,
          "new-monthly-rent": 600,
          "car-rental-and-gas": 200,
          "cell-phone": 210,
          "moving-truck": 320,
          "gas-for-moving-truck": 200,
          "mental-health-treatment": 20,
          "income-loss": 200,
          "additional-security-measures": 0
        },
        {
          "hotel-costs": 500,
          "new-rental-deposit": 350,
          "connect-utilities": 40,
          "storage-unit": 200,
          "new-monthly-rent": 900,
          "car-rental-and-gas": 300,
          "cell-phone": 200,
          "moving-truck": 220,
          "gas-for-moving-truck": 25,
          "mental-health-treatment": 20,
          "income-loss": 25,
          "additional-security-measures": 200
        },
        {
          "hotel-costs": 600,
          "new-rental-deposit": 800,
          "connect-utilities": 50,
          "storage-unit": 28,
          "new-monthly-rent": 750,
          "car-rental-and-gas": 300,
          "cell-phone": 120,
          "moving-truck": 200,
          "gas-for-moving-truck": 70,
          "mental-health-treatment": 30,
          "income-loss": 120,
          "additional-security-measures": 20
        },
      ]);
    });
};

