function removeVowelsReverse (string) {
	var que = "";
		
for (var i = string.length - 1; i>=0; i--) {
      
	   switch (string[i]) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
			break;
		case "y":
			if (Math.random() < .5) {
				que += string[i];
			}
			break;
		case "A":
		case "E":
		case "I":
		case "O":
		case "U":
			break;
		case "Y":
			if (Math.random() < .5) {
				que += string[i];
			}
			break;
		default:
			que += string[i];
			break;
	};
 };
 return console.log(que);
}

var phrase = "Marbles is a chicken";

removeVowelsReverse(phrase);


