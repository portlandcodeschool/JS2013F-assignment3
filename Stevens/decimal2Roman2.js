function decimalToRoman (decNumber) {
  //  do I need this?  var romNumeral = "";
  var rM = 0;
  var rD = 0;
  var rC = 0;
  var rL = 0;
  var rX = 0; 
  var rV = 0;
  var rI = 0;

  var romNumeral = "";
  var dRemainder = 0;
  var lRemainder = 0;
  var vRemainder = 0;
  var dDivided = decNumber/500;
  var lDivided = ((decNumber - (rM*1000))/50);
  //this gets rid of the 1000's because we have already taken care of them when we get to this variable in the string.
  var vDivided = decNumber/5; 

  if (decNumber >= 500) {
    //when the decNumber is greater than 500, 
    if (dDivided%2>0) {
      //check to see how many times 500 goes into the number, then divide that number by 2. 
      //(Example, 2500/500 = 5.  5/2 = 2 remainder 1) 
      //If there is a remainder greater than 0, the number is odd.  
      //This is because if there is a remainder it will always be 1, since otherwise you could divide by 2 with no remainder.
      //(Example, 3000/500 = 6.  6/2 = remainder 0)
      dDivided = dDivided - 1;
      //if it is odd, dDivided becomes decNumber/500 - 1. (Example, 3001/500 - 1 = 5) AND
      dRemainder = 1;
      //dRemainder is set to 1 rather than the default of "O".  
      //This will become the number of D's printed in the number & will always be 1 or 0.
    }

      rM = Math.floor(dDivided/2);
      //The number of m's equals example: rM = (3000/500)/2 = 3 
      rD = dRemainder;
      //The number of d's equals 1.

      for (var i = 0; i < rM; i++) {
      //Starting at the first digit of the number; until i is less than the number of m's defined above; keep going one digit at a time
        romNumeral = romNumeral + "M"
      //add "M" to the string until the loop completes.
      }  


    if (lDivided%2>0) {
      //same logic as above, but with 50's.  
      lDivided = lDivided - 1;
      //if it is odd, lDivided becomes ((decNumber - (rM*1000))/50) - 1. (Example, ((3300 - (3*1000))/50) - 1 = 5) AND
      lRemainder = 1;
      //lRemainder is set to 1 rather than the default of "O".
    }

      
      //The number of L's equals decNumber minus the number of m's times one thousand (to eliminate all the thousands), divided by 50.
      rC = lDivided/2
      //The number of C's equals the number of L's divided by 2 (300/50=6; 6/2 = 3; There are 3 100's in 300).
      rL = lRemainder;

      if (rC === 9) {
      //if the number of C's equals 9,  
        romNumeral = romNumeral + "CM"
      }

      if (rD === 1) {
        romNumeral = romNumeral + "D"
      }
      
  }  



  if (500 > decNumber >= 100) {
    if (lDivided%2>0) {
      lDivided = lDivided - 1;
      lRemainder = 1;
    }
      rC = lDivided/2;
      rL = lRemainder;

    if (rC >3) {
      rC = 0;
      rL = 0;
      romNumeral = romNumeral + "CD"
    }

    for (var i = 0; i <rC; i++) {
      romNumeral = romNumeral + "C"
    }

    if (rD >3) {
      rD = 0;
      rM = 0; 
      romNumeral = romNumeral + "LC"
    }

    for (var i = 0; i <rL; i++) {
      romNumeral = romNumeral + "L"
    }
  }  





    if (decNumber >= 10) {
      if (vDivided%2>0) {
        vDivided = vDivided - 1;
        vRemainder = 1;
      }  
    }

    for (var i = 0; i <rX; i++) {
      romNumeral = romNumeral + "X"
    }

      rX = vDivided/2;
      rV = vRemainder;
    
    if (rV >3) {
      rX = 0;
      rV = 0;
      romNumeral = romNumeral + "IX"
    }

    for (var i = 0; i <rV; i++) {
      romNumeral = romNumeral + "V"
    }

    if (rV >3) {
      rV = 0;
      rI = 0; 
      romNumeral = romNumeral + "IV"
    }

    for (var i = 0; i <rI; i++) {
      romNumeral = romNumeral + "I"
    }
  
  return romNumeral;
}
console.log(decimalToRoman(1900))