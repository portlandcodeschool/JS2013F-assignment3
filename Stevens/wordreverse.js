function splitSentence (sentence) {
  var space = " ";
  var arrayOfStrings = sentence.split(" ");

 return arrayOfStrings;
}

function wordReverse (sentence) {
  var arrayOfStrings = splitSentence(sentence);
  var reverseSentence = "";

  for (var i = (arrayOfStrings.length-1); i>=0; i--) {
  	if (i === arrayOfStrings.length - 1) {
  	  reverseSentence = reverseSentence + arrayOfStrings[i]; 
  	} else {
      reverseSentence = reverseSentence + " " + arrayOfStrings[i];
    }
  }	
  return reverseSentence;
}
console.log(wordReverse("How do you solve a problem like Maria?"))








  //for (var i === sentence.length - 1, i === 0, i-- ); {
//i'm not sure if this loop is right.  

 // }

//return sentenceReverse



//console.log(wordReverse("How do you solve a problem like Maria?"))