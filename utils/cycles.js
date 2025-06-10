// Вивести числа у консоль у будь-якому діапазоні (зростання/спадання)
export function printNumbersRange(from, to) {
  if (from <= to) {
    let i = from;
    while (i <= to) {
      console.log(i);
      i++;
    }
  } else {
    let i = from;
    do {
      console.log(i);
      i--;
    } while (i >= to);
  }
}

// Знайти суму чисел від start до end включно
export function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

// Повернути найбільше з двох цілих чисел
export function maxInt(a, b) {
  return a > b ? a : b;
}
