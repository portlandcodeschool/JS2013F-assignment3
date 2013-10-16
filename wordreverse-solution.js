var input = "I am the very model of a modern major general";
var temp = "";
var output = "";

for (var i = 0; i < input.length; i++) {
  if (input[i] === " ") {
    output = temp + " " + output;
    temp = "";
  } else {
    temp += input[i];
  }
}
output = temp + " " + output;

console.log(output);