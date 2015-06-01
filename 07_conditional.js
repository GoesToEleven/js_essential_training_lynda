/*

 if (condition) {
 code goes here
 }

 the condition must evaluate to boolean (true or false)

 */


/*

 ( parentheses )
 [ brackets ]
 { braces }
 */

// example
var a = 12;

if (a < 50) {
    console.log("a is less than 50");
}

// example
var b = 70;
if (b == 70) {
    console.log("b equals 70");
}

// example
// === is strict equality - checks type, also
var c = 70;
if (c === 70) {
    console.log("c equals 70");
}

// example
// === is strict equality - checks type, also
var c = '70';
if (c === 70) {
    console.log("c equals 70");
} else {
    console.log('c is not equal to 70')
}

// example
var d = 70;
if (d != 60) {
    console.log("d is not equal to 60");
}

// example - with one line of code, curly braces aren't required
// good practic to still include them, though
var e = 70;
if (e != 1)
    console.log('e is not equal to 1');

// else
var f = 1;
if (f != 1) {
    console.log('f is not equal to 1');
} else {
    console.log('f is equal to 1');
}

// nested
var g = 57;
var h = 62;
if (g == 57) {
    if (h == 62) {
        console.log('g & h equal', g, h)
    }
}

// and
var i = 23;
var j = 57;
if (i === 23 && j === 57) {
    console.log('i & j', i, j);
}

// or
var k = 23;
var l = 57;
if (k === 39 || l === 57) {
    console.log('k & l', k, l);
}

// ternary
// (condition) ? true : false;
var one = 23;
var two = 12;
var high = (one > two) ? one : two;
console.log('high', high);

// RAY training
var weather = 'sunny';

switch (weather) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
        break;
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

if (weather === 'misty') {
    console.log("Remember to bring an umbrella.");
} else if (weather === 'sunny') {
    console.log("Dress lightly.");
} else if (weather === 'cloudy') {
    console.log("Go outside.");
} else {
    console.log("Unknown weather type!");
}