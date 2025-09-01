const num = 12;
num === 12 ? console.log('yes') : console.log('no');
const city = "New Yrk";
switch (city) {
  case "Bangalore":
  case "Kolkata":
  case "Agra":
  case "Jaipur":
    console.log("All these are in India");
    break;
  case "New York":
  default:
    console.log("It is in USA");
}

for (let i = 1, j = 10, k = 100; i <= 10 && j >= 1; i++, j--, k++) {
  console.log(i, j, k);
}