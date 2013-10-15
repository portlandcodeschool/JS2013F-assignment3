
function Reverse (cow) {
	var str = ""
	var cowArray = cow.split(" ").reverse();
	for(var i=0;i<cowArray.length;i++)
	{
		str = str + cowArray[i] 
		if (i !== cowArray.length -1) {
			str = str + " "
		}
	}
	return str 
};
console.log(Reverse("one two three four"))
console.log(Reverse("The cow goes moo"))