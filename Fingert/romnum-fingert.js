/*couldn't figure-out how to convert double/triple/etc.-digit Roman strings to Dec. 
But, this is a start*/

if(!module.parent) { // Put any code you need to test your functions in here:
  var num = 67;
  var Roman = "V";
// Example:
console.log("53 in roman numerals is: " + decimalToRoman(num));  
console.log(Roman + " in decimal form would be: " + romanToDecimal(Roman));
console.log(decToRom (num));

}
/*-----------------------------------------------------------------------------
     

     Nothing needs to be in this area


-----------------------------------------------------------------------------*/
function decimalToRoman (decNumber) {
  var romNumeral = " ";
  var secondDigit = " ";

  // Implement here!
    
    var A=(num + ' ').split('');
    
     if (A[1]==="1"){
    	secondDigit = "I";
    }
     else if (A[1]==="2"){
    	secondDigit = "II";
    }
     else if (A[1]==="3"){
    	secondDigit = "III";
    }
    else if (A[1]==="4"){
    	secondDigit = "IV";
    }
     else if (A[1]==="5"){
    	secondDigit = "V";
    }
    else if (A[1]==="6"){
    	secondDigit = "VI";
    }
     else if (A[1]==="7"){
    	secondDigit = "VII";
    }
    else if (A[1]==="8"){
    	secondDigit = "VIII";
    }
     else if (A[1]==="9"){
    	secondDigit = "IX";
    }
    
    if (A[0]==="0"){
    	romNumeral = " ";
    }
    else if (A[0]==="1"){
    	romNumeral = "X";
    }
	else if(A[0]==="2"){
    	romNumeral = "XX";
    }  
    else if(A[0]==="3"){
    	romNumeral = "XXX";
    }
	else if(A[0]==="4"){
    	romNumeral = "XL";
    }
    else if (A[0]==="5"){
    	romNumeral = "L";
    }
	else if(A[0]==="6"){
    	romNumeral = "LX";
    }  
    else if(A[0]==="7"){
    	romNumeral = "LXX";
    }
	else if(A[0]==="8"){
    	romNumeral = "LXXX";
    }
    else if(A[0]==="9"){
    	romNumeral = "XC";
    }

   
   

 
  
  //var digits = num.toString().split('');
  //console.log(digits);

    
  var product = romNumeral + secondDigit;
  return product;
}

function romanToDecimal (romNumeral) {
  var decNumber = 0;

  var secondDigit = " ";

  // Implement here!
    
   // var A=(Roman);
    
     if (Roman==="I"){
    	secondDigit = "1";
    }
     else if (Roman==="II"){
    	secondDigit = "2";
    }
     else if (Roman==="III"){
    	secondDigit = "3";
    }
    else if (Roman==="IV"){
    	secondDigit = "4";
    }
     else if (Roman==="V"){
    	secondDigit = "5";
    }
    else if (Roman==="VI"){
    	secondDigit = "6";
    }
     else if (Roman==="VII"){
    	secondDigit = "7";
    }
    else if (Roman==="VIII"){
    	secondDigit = "8";
    }
     else if (Roman==="9"){
    	secondDigit = "IX";
    }
    
    return secondDigit;
  
  
}

function decToRom (){
  var hunds = " ";
  var tens = " ";
  var ones = " ";


  if(Math.floor(num / 100) === "1"){
    hunds = "C";
  }
  else if(Math.floor(num / 10) === "1"){
    hunds = "x";
  }

  return hunds;

}

// Don't worry about this stuff. It's here so I can more easily test your code.

module.exports.decimalToRoman = decimalToRoman;
module.exports.romanToDecimal = romanToDecimal;
