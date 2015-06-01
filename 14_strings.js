var escapingCharacters = "He said, \"We shouldn't run.\"";
console.log(escapingCharacters);
console.log(escapingCharacters.toUpperCase());
console.log(escapingCharacters.toLowerCase());

// this creates an array of words
// in this example, the delimeter is a space
var words = escapingCharacters.split(" ");
for (var i = 0; i < words.length; i++) {
    console.log(words[i]);
}

// another method, indexOf()
console.log(escapingCharacters.indexOf('We'));
if (escapingCharacters.indexOf('Dog') === -1) {
    console.log('That word does not occur');
}

// slicing
// zero index - starts counting at 0
// from position 3 up to, BUT NOT INCLUDING, position 12
console.log(escapingCharacters.slice(3,12));