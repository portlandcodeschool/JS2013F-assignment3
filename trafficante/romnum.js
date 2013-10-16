if(!module.parent) { // Put any code you need to test your functions in here:

// Example:
console.log(decimalToRoman(1479));  

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = "";

  var romThousands = Math.floor(decNumber / 1000);
  var romHundreds = Math.floor(decNumber % 1000 / 100);
  var romTens = Math.floor(decNumber % 100 / 10);
  var romOnes = Math.floor(decNumber % 10 / 1);

  while(romThousands--) {
  	romNumeral += "M";
  }

  if (romHundreds == 4) {
  	romNumeral += "CD";
  }
  else if (romHundreds == 5) {
  	romNumeral += "D";
  }
  else if (romHundreds == 6) {
  	romNumeral += "DC";
  }
  else if (romHundreds == 7) {
  	romNumeral += "DCC";
  }
  else if (romHundreds == 8) {
  	romNumeral += "DCCC"
  }
  else if (romHundreds == 9) {
  	romNumeral += "CM";
  }
  else {
  	while(romHundreds--) {
  		romNumeral += "C";
  	}
  }
  
  if (romTens == 4) {
  	romNumeral += "XL";
  }
  else if (romTens == 5) {
  	romNumeral += "L";
  }
  else if (romTens == 6) {
  	romNumeral += "LX";
  }
  else if (romTens == 7) {
  	romNumeral += "LXX";
  }
  else if (romTens == 8) {
  	romNumeral += "LXXX";
  }
  else if (romTens == 9) {
  	romNumeral += "XC"
  }
  else {
  	while(romTens--) {
  		romNumeral += "X";
  	}
  }
 
  if (romOnes == 4) {
  	romNumeral += "IV";
	}
	else if (romOnes == 5) {
		romNumeral += "V";
	}
	else if (romOnes == 6) {
		romNumeral += "VI";
	}
	else if (romOnes == 7) {
		romNumeral += "VII";
	}
	else if (romOnes == 8) {
		romNumeral += "VIII";
	}
	else if (romOnes == 9) {
		romNumeral += "IX";
	}
  else {
	  while(romOnes--) {
  		romNumeral += "I";
  	}
  }

  return romNumeral
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;

  

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;

/*
####romnum.js Directions

This assignment is significantly more challenging. You need to implement two functions. One will convert a decimal number (Number type) to a roman numeral string. The other will convert a roman numeral string to a decimal number (Number type).

Pay close attention to the comments in the file about where to put things. I've included some code for me to use to test your work. You shouldn't need to change it.
*/
