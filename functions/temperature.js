export function convertTemperature(input) {
  const value = parseFloat(input);
  if (input.toLowerCase().includes("c")) {
    return ((value * 9) / 5 + 32).toFixed(2) + "F";
  } else if (input.toLowerCase().includes("f")) {
    return (((value - 32) * 5) / 9).toFixed(2) + "C";
  } else {
    throw new Error('Input must contain "C" or "F"');
  }
}
