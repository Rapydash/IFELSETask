import { test, expect } from "@playwright/test";
import { calculateDiscount } from "../functions/discount.js";

test("calculateDiscount returns correct price", () => {
  expect(calculateDiscount(100, 10)).toBe(90);
  expect(calculateDiscount(200, 50)).toBe(100);
});

test("calculateDiscount throws on bad input", () => {
  expect(() => calculateDiscount("100", 10)).toThrow();
  expect(() => calculateDiscount(100, -5)).toThrow();
});
