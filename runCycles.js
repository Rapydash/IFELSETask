import { printNumbersRange, sumRange, maxInt } from "./utils/cycles.js";

// 1. Виведіть в консоль числа від 1 до 345 (while)
console.log("Виведіть в консоль числа від 1 до 345 (while):");
printNumbersRange(1, 345);

// 2. Знайти суму чисел від 1 до 100
console.log("\nЗнайти суму чисел від 1 до 100:", sumRange(1, 100));

// 3. Виведіть в консоль числа від 241 до 1 (do while)
console.log("\nВиведіть в консоль числа від 241 до 1 (do while):");
printNumbersRange(241, 1);

// 4. Найбільше з двох чисел
const a = 10,
  b = 2;
console.log(`\nНайбільше з двох чисел (${a}, ${b}):`, maxInt(a, b));
