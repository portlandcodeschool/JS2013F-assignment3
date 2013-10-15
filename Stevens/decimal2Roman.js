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
  var lDivided = decNumber/50;
  var vDivided = decNumber/5; 

  if (decNumber >= 500) {
    if (dDivided%2>0) {
      dDivided = dDivided - 1;
      dRemainder = 1;
    }
      rM = dDivided/2;
      rD = dRemainder;

    for (var i = 0; i <rM; i++) {
      romNumeral = romNumeral + "M"
    }

    if (rD >3) {
      rD = 0;
      rM = 0; 
      romNumeral = romNumeral + "CM"
    }

    for (var i = 0; i <rD; i++) {
      romNumeral = romNumeral + "D"
    }

  }  
  if (decNumber >= 100) {
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
  }
  return romNumeral;
}
console.log(decimalToRoman(3000))