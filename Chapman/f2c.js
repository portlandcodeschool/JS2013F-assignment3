var temperature = 86;



console.log(temperature + " degrees Fahrenheit is " +
            fahrenheitToCelsius(temperature) + " degrees Celsius");

console.log(temperature + " degrees Celsius is " + 
            celsiusToFahrenheit(temperature) + " degrees Fahrenheit");

console.log(fahrenheitToCelsius(95) + " degrees Celsius is a pretty hot day!");

console.log("Water boils at " + celsiusToFahrenheit(100) + " degrees Fahrenheit.");


function celsiusToFahrenheit () {
  return ((temperature * 9) / 5) + 32;
  //return 186.8
}

function fahrenheitToCelsius () {
  //return 30;
  return ((temperature - 32) * (5/9));
}
