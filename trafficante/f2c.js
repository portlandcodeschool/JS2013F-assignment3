//Temperature functions defined

function tempConvCelsToFar (temperatureC) {
	return temperatureC * 9 / 5 + 32
}

function tempConvFarToCels (temperatureF) {
	return (temperatureF - 32) * 5 / 9
}

//Functions in action

console.log("86 degrees Fahrenheit is " + tempConvFarToCels(86) + " degrees Celsius")
console.log("86 degrees Celsius is " + tempConvCelsToFar(86) + " degrees Fahrenheit")
console.log(tempConvFarToCels(95) + " degrees Celsius is a pretty hot day!")
console.log("Water boils at " + tempConvCelsToFar(100) + " degrees Fahrenheit")



/*CONVERSIONS

	°F to °C	Deduct 32, then multiply by 5, then divide by 9
	°C to °F	Multiply by 9, then divide by 5, then add 32

*/