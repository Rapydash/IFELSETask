export const cities = [
  "miami",
  "barcelona",
  "madrid",
  "amsterdam",
  "berlin",
  "sao paulo",
  "lisbon",
  "mexico city",
  "paris",
];

export const citiesCapitalized = cities.map(
  (city) => city.charAt(0).toUpperCase() + city.slice(1)
);

console.log(citiesCapitalized);

citiesCapitalized.forEach((city, idx) => {
  console.log(`${idx + 1}. ${city}`);
});
