import { test, expect } from "@playwright/test";
import { convertTemperature } from "../functions/temperature.js";

test("convertTemperature Celsius to Fahrenheit", () => {
  expect(convertTemperature("0C")).toBe("32.00F");
  expect(convertTemperature("100C")).toBe("212.00F");
});

test("convertTemperature Fahrenheit to Celsius", () => {
  expect(convertTemperature("32F")).toBe("0.00C");
  expect(convertTemperature("212F")).toBe("100.00C");
});

test("convertTemperature throws error on invalid input", () => {
  expect(() => convertTemperature("45")).toThrow();
});
