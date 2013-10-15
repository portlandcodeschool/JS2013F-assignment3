

/*function Reverse (cow) {
var x = ("Let's do some stuff.");
var cow = x.split(" ").reverse().join(" ")
for (var i = 3; i < -1; i -= 1)
 return(Reverse)
}
console.log(Reverse)*/

function Reverse (cow) {
	var str = ""
	var cowArray = cow.split(" ").reverse();
	for(var i=0;i<cowArray.length;i++)
	{
		str = str + cowArray[i]
	}
	return str 
};
console.log(Reverse("one two three four"))