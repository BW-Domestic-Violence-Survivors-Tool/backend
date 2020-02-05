const db = require("../data/db-config");
const request = require('supertest')
const users = require("./user-router");
const server = require("../server")
describe("user router", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    describe("/login", () => {
        test("should return a 200 status", () => {
          return request(server)
            .post("/login")
            .send({ username: "legend10", password: "paws" })
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
      });

    // describe("/register", () => {
    //     test("should return a 200 status", () => {
    //       return request(users)
    //         .post("/register")
    //         .then(res => {
    //           expect(res.status).toBe(200);
    //         });
    //     });
    //   });

})