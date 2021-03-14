const app = require("../index");
const request = require("supertest");
require("dotenv").config();

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("/:zipCode", () => {
  const zipCode = "92107"
  const route = "/" + zipCode;
  test("Returns congress members object ", async () => {
    const response = await request(app)
      .get(route)
    console.log(response)
  });
})
