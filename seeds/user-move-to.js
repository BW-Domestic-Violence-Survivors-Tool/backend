exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("relocation costs")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("relocation costs").insert([
        {
          "userId": 1,
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
        },
      ]);
    });
};

