if(!module.parent) { // Put any code you need to test your functions in here:
  for (var i = 1; i <= 5; i = i + 1) {
    console.log(romanToDecimal(decimalToRoman(i)));
  } 

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = "";
  while (decNumber >= 1000) {
    decNumber -= 1000;
    romNumeral += "M";
  }
  if (decNumber > 900) {
    romNumeral += "CM";
    decNumber -= 900;
  }
  while (decNumber >= 500) {
    decNumber -= 500;
    romNumeral += "D";
  }
  if (decNumber > 400) {
    romNumeral += "CD";
    decNumber -= 400;
  }
  while (decNumber >= 100) {
    decNumber -= 100;
    romNumeral += "C";
  }
  if (decNumber > 90) {
    romNumeral += "XC";
    decNumber -= 90;
  }
  while (decNumber >= 50) {
    decNumber -= 50;
    romNumeral += "L";
  }
  if (decNumber >= 40) {
    romNumeral += "XL";
    decNumber -= 40;
  }
  while (decNumber >= 10) {
    decNumber -= 10;
    romNumeral += "X";
  }
  if (decNumber === 9) {
    romNumeral += "IX";
    decNumber -= 9;
  }
  while (decNumber >= 5) {
    decNumber -= 5;
    romNumeral += "V";
  }
  if (decNumber === 4) {
    romNumeral += "IV";
    decNumber -= 4;
  }
  while (decNumber >= 1) {
    decNumber -= 1;
    romNumeral += "I";
  }

  return romNumeral;
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;

  return decNumber;
}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;
