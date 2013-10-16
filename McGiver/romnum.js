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


function romanize (53) {
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


//
//function decimalToRoman (decNumber) {
//  var romNumeral = "";
//
//  return romNumeral;
//}
//
//function romanToDecimal (romNumeral) {
//  var decNumber = 0;
//
//  // Implement here!
//
//  return decNumber;
//}

// Don't worry about this stuff. It's here so I can more easily test your code.

//module.exports.decimalToRoman = decimalToRoman;
//module.exports.romanToDecimal = romanToDecimal;
