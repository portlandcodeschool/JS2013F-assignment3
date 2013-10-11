var temperature = 86;

// You shouldn't need any of these variables
// Even if you did, they shouldn't be strings




console.log(temperature + " degrees Fahrenheit is " +
            fahrenheitToCelsius(temperature) + " degrees Celsius");

console.log(temperature + " degrees Celsius is " + 
            celsiusToFahrenheit(temperature) + " degrees Fahrenheit");

console.log(fahrenheitToCelsius(temperature = 95) + " degrees Celsius is a pretty hot day!");

console.log("Water boils at " + celsiusToFahrenheit(100) + " degrees Fahrenheit."); //Doesn't ever return the right value. But why? Please to tell me.


/* What? How can I call the functions above when they're not defined until below?
   Well, functions that are defined within the current scope (top-level scope in
   this case) are "hoisted" to the top of the program at runtime. This means we
   can make a convention of defining our functions at the end of current scope. */

function celsiusToFahrenheit () {
  // You should not use a global variable for the function return value
  // You don't really need a variable at all here. Just return the value of the expression.
  return (temperature * 9) / 5 + 32;
  
}

function fahrenheitToCelsius () {
  // Same comments as above
  return ((temperature - 32) * 5) / 9;
  
}

/*function boilingWater () { // This function is unnecessary. Use celsiusToFahrenheit(100) instead.
  x = (100 * 9) / 5 + 32;
  return x;
}*/
