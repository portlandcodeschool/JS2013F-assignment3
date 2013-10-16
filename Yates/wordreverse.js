function wordReverse(phrase) {
  var word = phrase.split(" ").reverse().join(" ");

  return word;
}

console.log(wordReverse("Yer a wizard, Harry."));