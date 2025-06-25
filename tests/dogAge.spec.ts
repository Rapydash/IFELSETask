import { test, expect } from "@playwright/test";
import { calculateDogAge } from "../functions/dogAge.js";

test("calculateDogAge default", () => {
  expect(calculateDogAge(2)).toBe("Вашому песику 14 років у собачих роках!");
});

test("calculateDogAge with custom ratio", () => {
  expect(calculateDogAge(2, 5)).toBe("Вашому песику 10 років у собачих роках!");
});

test("calculateDogAge throws on negative", () => {
  expect(() => calculateDogAge(-1)).toThrow();
});
