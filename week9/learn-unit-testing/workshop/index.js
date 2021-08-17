// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}
function searchParamsToObject(paramString) {
  const params = new URLSearchParams(paramString);
  return Object.fromEntries(params);
}

function isLeapYear(year) {
  if (typeof year !== "number") return "Please enter a number";
  if (year < 0) return "Year cannot be negative";
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
