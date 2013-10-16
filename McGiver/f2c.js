var temperature = 86;

console.log(temperature + " degrees Fahrenheit is " +
            fahrenheitToCelsius(temperature) + " degrees Celsius");

console.log(temperature + " degrees Celsius is " + 
            celsiusToFahrenheit(temperature) + " degrees Fahrenheit");

console.log(fahrenheitToCelsius(95) + " degrees Celsius is a pretty hot day!");

console.log("Water boils at " + celsiusToFahrenheit(100) + " degrees Fahrenheit.");

/* What? How can I call the functions above when they're not defined until below?
   Well, functions that are defined within the current scope (top-level scope in
   this case) are "hoisted" to the top of the program at runtime. This means we
   can make a convention of defining our functions at the end of current scope. */

function celsiusToFahrenheit(tempc) {
  var tempf = ((tempc *  9/5 ) +32); 
  return tempf
}

function fahrenheitToCelsius(tempf) {
  var tempc = ((tempf  -  32)  *  5/9 );
  return tempc; 
}