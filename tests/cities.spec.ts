import { test, expect } from "@playwright/test";
import { cities, citiesCapitalized } from "../functions/cities.js";

test("citiesCapitalized should have first letter uppercase", () => {
  expect(citiesCapitalized).toEqual([
    "Miami",
    "Barcelona",
    "Madrid",
    "Amsterdam",
    "Berlin",
    "Sao paulo",
    "Lisbon",
    "Mexico city",
    "Paris",
  ]);
});
