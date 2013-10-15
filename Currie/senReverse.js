
var string = "I have a funny-looking dog named Koby-Beef";

function reverse(s){
    
   return s.split(" ").reverse().join(" ") + ".";
};

reverse(string);

console.log(reverse(string));