const db = require("../data/db-config");
const request = require("supertest");
const server = require("../server");

// find user origin calculator by user id
describe("/user/origin/:id", () => {
  test("should return a 200 status", () => {
    return request(server)
      .get("/user/origin/4")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

// // updates user origin calc amounts
describe("/user/origin/addData/1", () => {
  test("should return a 200 status", () => {
    return request(server)
      .put("/user/origin/addData/1")
      .send({
        monthlyIncome: 9000,
        transportation: 150,
        food: 350,
        healthInsurance: 80,
        car: 400,
        carInsurance: 280,
        loans: 700,
        other: 10
      })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

// // original POST to a users origin calc
  describe("/user/origin/addData", () => {
    test("should return a 200 status", () => {
      return request(server)
        .post("/user/origin/addData")
        .send({ 
            userId:3,
            monthlyIncome: 10000,
            transportation: 150,
            food: 350,
            healthInsurance: 80,
            car: 400,
            carInsurance: 280,
            loans: 700,
            other: 10 })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
