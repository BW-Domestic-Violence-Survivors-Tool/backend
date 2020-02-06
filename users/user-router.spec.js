const db = require("../data/db-config");
const request = require("supertest");
const users = require("./user-router");
const server = require("../server");

// register a user
describe("/register", () => {
  test("should return a 201 status", () => {
    return request(server)
      .post("/register")
      .send({ username: "a", password: "pass" })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
});

// login a user
describe("/login", () => {
  test("should return a 200 status", () => {
    return request(server)
      .post("/login")
      .send({ username: "Rachel", password: "password" })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

// delete a user by id
describe("/delete", () => {
  test("should return a 200 status", () => {
    return request(server)
      .delete("/delete/4")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});