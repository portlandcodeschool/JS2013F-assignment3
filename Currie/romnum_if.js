if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("53 in roman numerals is: " + decimalToRoman(1657));  

};
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = "";

  
  	 if (decNumber/1000 >= 1) {
  	 	var M = Math.floor(decNumber/1000);
  	 		for (var i = M; i > 0; i--) {
  	 			romNumeral += "M";
  	 		};
  	 	decNumber = decNumber - (Math.floor(decNumber/1000) * 1000);
  	 };
  	 if (decNumber/500 >= 1) {
		var D = Math.floor(decNumber/500);
  	 		for (var i = D; i > 0; i--) {
  	 			romNumeral += "D";
  	 		};
  	 	decNumber = decNumber - (Math.floor(decNumber/500) * 500);
  	 };
  	 if (decNumber/100 >= 1) {
  	 	var C = Math.floor(decNumber/100);
  	 		for (var i = C; i > 0; i--) {
  	 			romNumeral += "C";
  	 		};
  	 	decNumber = decNumber - (Math.floor(decNumber/100) * 100);
  	 };
  	 if (decNumber/50 >= 1) {
  	 	var L = Math.floor(decNumber/50);
  	 		for (var i = L; i > 0; i--) {
  	 			romNumeral += "L";
  	 		};
  	 	decNumber = decNumber - (Math.floor(decNumber/50) * 50);
  	 };
  	 if (decNumber/10 >= 1) {
  	 	var X = Math.floor(decNumber/10);
  	 		for (var i = X; i > 0; i--) {
  	 			romNumeral += "X";
  	 		};
  	 	decNumber = decNumber - (Math.floor(decNumber/10) * 10);
  	 };
  	 if (decNumber/5 >= 1) {
  	 	var V = Math.floor(decNumber/5);
  	 		for (var i = V; i > 0; i--) {
  	 			romNumeral += "V";
  	 		};
  	 	decNumber = decNumber - (Math.floor(decNumber/5) * 5);
  	 };
  	 if (decNumber/1 >= 1) {
		var I = Math.floor(decNumber/1);
  	 		for (var i = I; i > 0; i--) {
  	 			romNumeral += "I";
  	 		};
  	 	decNumber = decNumber - (Math.floor(decNumber/1) * 1);
  	 };

  return romNumeral;
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;

  // Implement here!

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;

