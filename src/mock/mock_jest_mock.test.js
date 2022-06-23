import * as app from "./app";
import * as math from "./math";

// Set all module functions to jest.fn
jest.mock("./math.js");
// Same as
// math.add = jest.fn();mock_jest
// math.subtract = jest.fn();
// math.multiply = jest.fn();
// math.divide = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
