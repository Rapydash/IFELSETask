import { test, expect } from "@playwright/test";
import { tellFortune } from "../functions/fortune.js";

test("tellFortune formats correctly", () => {
  expect(tellFortune(2, "Оля", "Київ", "QA")).toBe(
    "Ти будеш QA в Київ, одружений на Оля і матимеш 2 дітей."
  );
});
