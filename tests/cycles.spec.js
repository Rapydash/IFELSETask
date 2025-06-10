import { test, expect } from "@playwright/test";
import { printNumbersRange, sumRange, maxInt } from "../utils/cycles.js";

// Тест для maxInt
test("maxInt повертає більше з двох", async () => {
  expect(maxInt(10, 2)).toBe(10);
  expect(maxInt(3, 5)).toBe(5);
  expect(maxInt(7, 7)).toBe(7);
  expect(maxInt(-10, -5)).toBe(-5);
});

// Тест для sumRange (адаптивно для різних діапазонів)
test("sumRange повертає суму у довільному діапазоні", async () => {
  expect(sumRange(1, 100)).toBe((100 * 101) / 2); // формула арифм. прогресії
  expect(sumRange(10, 15)).toBe(10 + 11 + 12 + 13 + 14 + 15);
  expect(sumRange(-3, 3)).toBe(-3 + -2 + -1 + 0 + 1 + 2 + 3);
});

// Адаптивний тест для printNumbersRange (зростання)
test("printNumbersRange (зростання) виводить усі числа у діапазоні", async () => {
  const logs = [];
  const origLog = console.log;
  console.log = (msg) => logs.push(Number(msg));
  printNumbersRange(1, 5);
  console.log = origLog;
  expect(logs).toEqual([1, 2, 3, 4, 5]);
});

// Адаптивний тест для printNumbersRange (спадання)
test("printNumbersRange (спадання) виводить усі числа у зворотному діапазоні", async () => {
  const logs = [];
  const origLog = console.log;
  console.log = (msg) => logs.push(Number(msg));
  printNumbersRange(3, 1);
  console.log = origLog;
  expect(logs).toEqual([3, 2, 1]);
});

// Додатковий тест на великий діапазон, перевіряємо тільки кількість, перше і останнє число
test("printNumbersRange (великий діапазон) — швидка перевірка", async () => {
  const logs = [];
  const origLog = console.log;
  console.log = (msg) => logs.push(Number(msg));
  printNumbersRange(100, 200);
  console.log = origLog;
  expect(logs.length).toBe(101);
  expect(logs[0]).toBe(100);
  expect(logs[logs.length - 1]).toBe(200);
});
