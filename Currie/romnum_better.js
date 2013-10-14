//http://www.iandevlin.com/blog/2010/03/javascript/converting-decimal-numbers-to-roman-numerals-in-javascript



var roman = new Array(); 
roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
var decimal = new Array(); 
decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
function decimalToRomanSimple(value) { 
  if (value <= 0 || value >= 4000) return value; 
    var romanNumeral = ""; 
    for (var i=0; i<roman.length; i++) { 
      while (value >= decimal[i]) {  
        value -= decimal[i]; 
        romanNumeral += roman[i]; 
      } 
    } 
    return romanNumeral; 
}

function getRoman(value) { 
  var romanNumeral = ""; 
  var numThousands = 0; 
  for (var i=0; i<roman.length; i++) { 
    if (value == 0) break;   
    while (value >= decimal[i]) { 
      value -= decimal[i]; 
      romanNumeral += roman[i]; 
      if (roman[i] == 'M') numThousands++; 
    }       
  } 
  return { numThousands:numThousands, romanNumeral:romanNumeral }; 
}

function decimalToRoman(value) { 
  // 3,888,888 is the longest number represented by Roman numerals 
  if (value <= 0 || value > 3888888) return value; 
  var romanNumeral1 = ""; 
  var romanO = getRoman(value); 
  // If the number is 4000 or greater 
  if (romanO.numThousands > 4) { 
    var thousandString = ""; 
    for (var j=0;j<romanO.numThousands;j++) thousandString += "M"; 
      var thousandsO = getRoman(romanO.numThousands); 
      var thBase = "<span style='border-top:1px solid #000'>" +  
thousandsO.romanNumeral + "</span>"; 
      romanNumeral = romanO.romanNumeral.replace(thousandString, thBase); 
    } 
    else romanNumeral = romanO.romanNumeral; 
    return romanNumeral; 
}




































/*

if(!module.parent) { 

// Put any code you need to test your functions in here:

// Example:
console.log("1596 in roman numerals is: " + decimalToRoman(1596));  
console.log("MCMCDLIV")

};
/*-----------------------------------------------------------------------------
     Nothing needs to be in this area
-----------------------------------------------------------------------------
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
    if (romNumeral[i] = "M") {
      decNumber += 1000;
    };
    if (romNumeral[i] = "D") {
      decNumber += 500;
    };
    if (romNumeral[i] = "C") {
      decNumber += 100;
    };
    if (romNumeral[i] = "L") {
      decNumber += 50;
    };
    if (romNumeral[i] = "X") {
      decNumber += 10;
    };
    if (romNumeral[i] = "V") {
      decNumber += 5;
    };
    if (romNumeral[i] = "I") {
      decNumber += 1;
    };

  };




  // Implement here!

  return decNumber;
};

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;


*/