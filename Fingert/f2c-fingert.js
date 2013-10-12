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

<<<<<<< HEAD
function celsiusToFahrenheit () {

  return (temperature * 9) / 5 + 32;
  // the problem here is that 'temperature' is a global variable
  // you need to be passing in a parameter value to convert
  // instead of referencing 'temperature' within the function
=======
function celsiusToFahrenheit (x) {
  // You should not use a global variable for the function return value
  // You don't really need a variable at all here. Just return the value of the expression.
  return (x * 9) / 5 + 32;
  
>>>>>>> changes
}

function fahrenheitToCelsius (x) {
  // Same comments as above
  return ((x - 32) * 5) / 9;
  
}
