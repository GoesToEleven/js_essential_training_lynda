var multVals = [];
multVals[0]=12;
multVals[1]=6;
multVals[2]=75;
multVals[3]='mouse';
multVals[4]=false;
for (var i = 0; i < multVals.length; i++) {
    console.log(multVals[i]);
}

// shorthand
var myVals = [12,6,75,'mouse',false,'God', 'Dog', true];
for (var i = 0; i < myVals.length; i++) {
    console.log(myVals[i]);
}

// long way
var otherVals = new Array();
var masVals = Array();
var otrasVals = Array(5);
// arrays are dynamic
// grow and shrink as needed

// arrays are objects
// objects have methods
// for example, the reverse method
var reversedMyVals = myVals.reverse();
for (var i = 0; i < reversedMyVals.length; i++) {
    console.log(reversedMyVals[i]);
}
// more methods: .join, .sort,
// another example
var myArrayOfLinks = document.getElementsByTagName("a");
for (var i = 0; i < myArrayOfLinks.length; i++) {
    console.log(myArrayOfLinks[i]);
}

// colors
var americanVintage = ['730E20','831224','152F40','A6986F','D9C7A7'];
var firenze = ['468966','FFF0A5','FFB03B','B64926','8E2800'];

for (var i = 0; i < americanVintage.length; i++) {
    console.log('American Vintage','#'+americanVintage[i]);
}


for (var i = 0; i < firenze.length; i++) {
    console.log('firenze','#'+firenze[i]);
}

// RAY training
var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]

// RAY training
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
var myVar4 = a.join('');    // assigns 'WindRainFire' to myVar4
console.log(myVar1);
console.log(myVar2);
console.log(myVar3);
console.log(myVar4);

// RAY training
var a = ['Bob', 'Fred', 'Lucy', 'Michele', 'Peter', 'Fay'];
console.log(a.sort());
console.log(a.sort().reverse());
console.log(a.sort().reverse().join(' | '));

// RAY training
var a = [];
a.unshift(1)
a.unshift(20)
a.unshift(13)
a.unshift(6)
console.log(a);
a.shift();
console.log(a);
a.push(9)
a.push(8)
a.push(7)
a.push(11)
console.log(a);
a.pop();
console.log(a);
