export function calculateDogAge(humanYears, ratio = 7) {
  if (typeof humanYears !== "number" || humanYears < 0) {
    throw new Error("Invalid age");
  }
  return `Вашому песику ${humanYears * ratio} років у собачих роках!`;
}
