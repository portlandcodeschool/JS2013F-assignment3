var temperature = 86;

console.log(temperature + " degrees Fahrenheit is " +
            fahrenheitToCelsius(temperature) + " degrees Celsius");

console.log(temperature + " degrees Celsius is " + 
            celsiusToFahrenheit(temperature) + " degrees Fahrenheit");

console.log(fahrenheitToCelsius(temperature) + " degrees Celsius is a pretty hot day!");

console.log("Water boils at " + celsiusToFahrenheit(100) + " degrees Fahrenheit.");


/* What? How can I call the functions above when they're not defined until below?
   Well, functions that are defined within the current scope (top-level scope in
   this case) are "hoisted" to the top of the program at runtime. This means we
   can make a convention of defining our functions at the end of current scope. */

function celsiusToFahrenheit () {

  return (temperature * 9) / 5 + 32;
  // the problem here is that 'temperature' is a global variable
  // you need to be passing in a parameter value to convert
  // instead of referencing 'temperature' within the function
}

function fahrenheitToCelsius () {
  // Same comments as above
  return ((temperature - 32) * 5) / 9;
  
}
