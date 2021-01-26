const { initApp } = require("./../../src/index");

let app;

beforeAll(() => {
  app = initApp();
});

describe("API", () => {
  it("should return app", () => {
    expect(app).not.toBe(null);
  });
});
