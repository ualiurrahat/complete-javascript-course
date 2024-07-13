// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);
// using forEach over map
//forEach's callback function takes 3 parametes
// value,key,entire map
currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "EUR", "GBP", "USD", "GBP"]);
// set has no keys,but forEach is being applied for arrays, map
// in such a way that the callback function takes 3 parameters
// and all its needed data. we will use the value here only
currenciesUnique.forEach(function (val, _, set) {
  console.log(`${val}: ${val}`);
});

// NOTE: inside forEach's callback function, we throw away second parameter
// as key does not make sense in case of sets.
