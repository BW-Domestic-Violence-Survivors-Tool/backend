exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("budget review")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("budget review").insert([
        {
          "userId": 1,
          "monthlyIncome": 4000,
          "transportation": 100,
          "food": 300,
          "healthInsurance": 120,
          "car": 200,
          "carInsurance": 60,
          "loans": 250,
          "other": 100,
          "hotelCosts": 200,
          "newRentalDeposit": 100,
          "connectUtilities": 20,
          "storageUnit": 250,
          "newMonthlyRent": 600,
          "carRentalAndGas": 200,
          "cellPhone": 210,
          "movingTruck": 320,
          "gasForMovingTruck": 200,
          "mentalHealthTreatment": 20,
          "incomeLoss": 200,
          "additionalSecurityMeasures": 0
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
          "other": 10,
          "hotelCosts": 500,
          "newRentalDeposit": 350,
          "connectUtilities": 40,
          "storageUnit": 200,
          "newMonthlyRent": 900,
          "carRentalAndGas": 300,
          "cellPhone": 200,
          "movingTruck": 220,
          "gasForMovingTruck": 25,
          "mentalHealthTreatment": 20,
          "incomeLoss": 25,
          "additionalSecurityMeasures": 200
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
          "other": 50,
          "hotelCosts": 600,
          "newRentalDeposit": 800,
          "connectUtilities": 50,
          "storageUnit": 28,
          "newMonthlyRent": 750,
          "carRentalAndGas": 300,
          "cellPhone": 120,
          "movingTruck": 200,
          "gasForMovingTruck": 70,
          "mentalHealthTreatment": 30,
          "incomeLoss": 120,
          "additionalSecurityMeasures": 20
        }
      ]);
    });
};
