var decNumber = 0;

if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log("9 in roman numerals is: " + decimalToRoman(9));  

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = "";

  // Implement here!

  if (decNumber <= 10) {

  	switch (decNumber) {
  		case 1: romNumeral = "I"; return romNumeral;
  		case 2: romNumeral = "II"; return romNumeral;
  		case 3: romNumeral = "III"; return romNumeral;
  		case 4: romNumeral = "IV"; return romNumeral;
  		case 5: romNumeral = "V"; return romNumeral;
  		case 6: romNumeral = "VI"; return romNumeral;
  		case 7: romNumeral = "VII"; return romNumeral;
  		case 8: romNumeral = "VIII"; return romNumeral;
  		case 9: romNumeral = "IX"; return romNumeral;
  		case 10: romNumeral = "X"; return romNumeral;

  	} else if (decNumber <= 100) {

      
      
    }

  }

  

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
