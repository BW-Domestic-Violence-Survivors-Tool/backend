const db = require("../data/db-config");
const request = require('supertest')
const users = require("./user-router");

describe("user router", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    describe("/register", () => {
        test("should return a 201 status", () => {
          return request(users)
            .post("/register")
            .then(res => {
              expect(res.status).toBe(201);
            });
        });
      });

})