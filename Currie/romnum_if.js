if(!module.parent) { 

// Put any code you need to test your functions in here:

// Example:
console.log("1596 in roman numerals is: " + decimalToRoman(1596));  
console.log("MDXCVI " + romanToDecimal("MDXCVI"));

};
/*-----------------------------------------------------------------------------
     Nothing needs to be in this area
-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  

  var romNumeral = "";

  
  if (1 <= decNumber / 1000) {
    
    var M = Math.floor(decNumber / 1000);
        
      for (var i = M; i > 0; i--) {
        romNumeral += "M";
      };

    decNumber -= (Math.floor(decNumber / 1000) * 1000);

  };
      
  
  if (9 <= decNumber / 100) {
  
    romNumeral += "CM";
  
    decNumber -= 900;
  
  };

  
  if (1 <= decNumber / 500) {
    
    var D = Math.floor(decNumber / 500);
    
        for (var i = D; i > 0; i--) {
          romNumeral += "D";
        };
    
    decNumber -= (Math.floor(decNumber / 500) * 500);
    
    };

  
  if (4 <= decNumber / 100) {
    
    romNumeral += "CD";
    
    decNumber -= 400;

    };


  if (1 <= decNumber / 100) {

    var C = Math.floor(decNumber / 100);

    for (var i = C; i > 0; i--) {
      romNumeral += "C";
    };

    decNumber -= (Math.floor(decNumber / 100) * 100);
    
    };

  
  if (9 <= decNumber / 10) {

    romNumeral += "XC";

    decNumber -= 90;

    };


  if (1 <= decNumber / 50) {
          
    romNumeral += "L";
    
    decNumber -= 50;
    
    };

  
  if (4 <= decNumber / 10) {
    
    romNumeral += "XL";
    
    decNumber -= 40;

    };


  if (1 <= decNumber / 10) {

    var C = Math.floor(decNumber / 10);

    for (var i = C; i > 0; i--) {
      romNumeral += "X";
    };
    
    decNumber -= (Math.floor(decNumber / 10) * 10);

    };

  if (9 <= decNumber / 1) {
  
    romNumeral += "IX";
  
    decNumber -= 9;
  
    };


  if (1 <= decNumber / 5) {
    
    romNumeral += "V";
    
    decNumber -= 5;
    
    };


  if (4 <= decNumber / 1) {
    
    romNumeral += "IV";
    
    decNumber -= 4;

    };


  if (1 <= decNumber / 1) {

    var I = decNumber / 1;

    for (var i = I; i > 0; i--) {
      romNumeral += "I";
    };   
    
    decNumber -= (decNumber / 1);

  };    
  

  return romNumeral;
};


//This function is not complete!!!!
function romanToDecimal (romNumeral) {


  var decNumber = 0;

  for (var i = romNumeral.length - 1; i >= 0; i--) {
    
    if (romNumeral[i] === "M" && romNumeral[i - 1] !== "C") {
      decNumber += 1000;
    };
    
    if (romNumeral[i] === "M" && romNumeral[i - 1] === "C") {
      decNumber += 900;
    };

    if (romNumeral[i] === "D" && romNumeral[i - 1] !== "C") {
      decNumber += 500;
    };
    
    if (romNumeral[i] === "D" && romNumeral[i - 1] === "C") {
      decNumber += 400;
    };

    if (romNumeral[i] === "C" && romNumeral[i - 1] !== "X" && romNumeral[i + 1] !== "D" && romNumeral[i + 1] !== "M") {
      decNumber += 100;
    };
    
    if (romNumeral[i] === "C" && romNumeral[i - 1] === "X") {
      decNumber += 90;
    };

    if (romNumeral[i] === "L" && romNumeral[i - 1] !== "X") {
      decNumber += 50;
    };
    
    if (romNumeral[i] === "L" && romNumeral[i - 1] === "X") {
      decNumber += 40;
    };
    
    if (romNumeral[i] === "X" && romNumeral[i - 1] !== "I" && romNumeral[i + 1] !== "L" && romNumeral[i + 1] !== "C") {
      decNumber += 10;
    };
    
    if (romNumeral[i] === "X" && romNumeral[i - 1] === "I") {
      decNumber += 9;
    };
    
    if (romNumeral[i] === "V" && romNumeral[i - 1] !== "I") {
      decNumber += 5;
    };
    
    if (romNumeral[i] === "V" && romNumeral[i - 1] === "I") {
      decNumber += 4;
    };

    if (romNumeral[i] === "I" && romNumeral[i + 1] !== "V" && romNumeral[i + 1] !== "X") {
      decNumber += 1;
    };

  };

return decNumber;

};

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;