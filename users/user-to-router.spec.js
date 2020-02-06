const db = require("../data/db-config");
const request = require("supertest");
const server = require("../server");

// get relocation calc by user id
describe("/user/to/1", () => {
  test("should return a 200 status", () => {
    return request(server)
      .get("/user/to/1")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

// original POST to a users relocation calc
// describe("/user/to/adddata", () => {
//   test("should return a 200 status", () => {
//     return request(server)
//       .post("/user/to/addData")
//       .send({
//         userId: 3,
//         hotelCosts: 10,
//         newRentalDeposit: 12,
//         onnectUtilities: 10,
//         storageUnit: 122,
//         ewMonthlyRent: 12,
//         carRentalAndGas: 12,
//         cellPhone: 1222,
//         movingTruck: 122,
//         gasForMovingTruck: 122,
//         mentalHealthTreatment: 122,
//         incomeLoss: 2221,
//         additionalSecurityMeasures: 221
//       })
//       .then(res => {
//         expect(res.status).toBe(200);
//       });
//   });
// });


// updates user relocation calc amounts
describe("/user/to/addData/1", () => {
  test("should return a 200 status", () => {
    return request(server)
      .put("/user/to/addData/1")
      .send({
        userId: 1,
        hotelCosts: 1,
        newRentalDeposit: 1,
        connectUtilities: 1,
        storageUnit: 1,
        newMonthlyRent: 1,
        carRentalAndGas: 1,
        cellPhone: 1,
        movingTruck: 1,
        gasForMovingTruck: 1,
        mentalHealthTreatment: 1,
        incomeLoss: 1,
        additionalSecurityMeasures: 1
      })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
