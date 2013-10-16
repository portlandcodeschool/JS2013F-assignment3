var myString = "I am the very model of a modern major general"

console.log(reverse(myString))


function reverse () {

	//var n = myString.split(" ")
	//var z = myString.split("")
	var counter = 0
	var wordcount = 0
	
	for (var i = 0; i < myString.length; i++) {
		if (myString[i] == " ")
		counter++
	}

	wordcount = counter + 1

	var n = myString.split(" ")
	var x = ""

	for (var i = wordcount - 1; i >= 0; i--) {
		//x = x + " " + n[i]

		if (i === wordcount - 1) {
			x = x + n[i]
		} else {
			x = x + " " + n[i]
		}

	}

	//return n;
	return x;

}

