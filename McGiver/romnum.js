

//if(!module.parent) { // Put any code you need to test your functions in here:
//
//// Example:
//console.log("53 in roman numerals is: " + decimalToRoman(53));  
//
//}
//


/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (1053) {
  	var romNumeral = "";
    while (i >= 1000) {
        romNumeral += "M";
        i -= 1000;        }
    while (i >= 900) {
        romNumeral += "CM";
        i -= 900;
    }
    while (i >= 500) {
        romNumeral += "D";
        i -= 500;
    }
    while (i >= 400) {
        romNumeral += "CD";
        i -= 400;
    }
    while (i >= 100) {
        romNumeral += "C";
        i -= 100;
    }
    while (i >= 90) {
        romNumeral += "XC";
        i -= 90;
    }
    while (i >= 50) {
        romNumeral += "L";
        i -= 50;
    }
    while (i >= 40) {
        romNumeral += "XL";
        i -= 40;
    }
    while (i >= 10) {
        romNumeral += "X";
        i -= 10;
    }
    while (i >= 9) {
        romNumeral += "IX";
        i -= 9;
    }
    while (i >= 5) {
        romNumeral += "V";
        i -= 5;
    }
    while (i >= 4) {
        romNumeral += "IV";
        i -= 4;
    }
    while (i >= 1) {
        romNumeral += "I";
        i -= 1;
    }    
    console.log(romNumeral);
	return romNumeral;
}



function romanToDecimal (i) {
  	var decNumber = 0;
  	while (i.contains "M") {
        romNumeral += "1000";
        i -= "m";        }
//    while (i >= 900) {
//        romNumeral += "CM";
//        i -= 900;
//    }
//    while (i >= 500) {
//        romNumeral += "D";
//        i -= 500;
//    }
//    while (i >= 400) {
//        romNumeral += "CD";
//        i -= 400;
//    }
//    while (i >= 100) {
//        romNumeral += "C";
//        i -= 100;
//    }
//    while (i >= 90) {
//        romNumeral += "XC";
//        i -= 90;
//    }
//    while (i >= 50) {
//        romNumeral += "L";
//        i -= 50;
//    }
//    while (i >= 40) {
//        romNumeral += "XL";
//        i -= 40;
//    }
//    while (i >= 10) {
//        romNumeral += "X";
//        i -= 10;
//    }
//    while (i >= 9) {
//        romNumeral += "IX";
//        i -= 9;
//    }
//    while (i >= 5) {
//        romNumeral += "V";
//        i -= 5;
//    }
//    while (i >= 4) {
//        romNumeral += "IV";
//        i -= 4;
//    }
//    while (i >= 1) {
//        romNumeral += "I";
//        i -= 1;
//    }    
  console.log(decNumber);
  return decNumber;
}

decimalToRoman(1234)
romantoDecimal(M)

// Don't worry about this stuff. It's here so I can more easily test your code.

//module.exports.decimalToRoman = decimalToRoman;
//module.exports.romanToDecimal = romanToDecimal;
