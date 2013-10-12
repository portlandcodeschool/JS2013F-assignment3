var str="How are you doing today?";
var n=str.split(" ");
var product = "";

//console.log(sentenceReversal(n));

for (var i = n.length - 1; i>=0; i--){
  product += " " + n[i];

}
console.log(product);
/*function sentenceReversal(x){
	

    x = n.reverse;
    return x;
}*/