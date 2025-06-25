export function calculateDiscount(price, percent) {
  if (typeof price !== "number" || typeof percent !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (percent < 0 || percent > 100) {
    throw new Error("Discount percent must be between 0 and 100");
  }
  return price - (price * percent) / 100;
}
