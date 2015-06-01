var foo = 5;
var bar = 5;
console.log('add it up ', foo+bar);

var foo = '5';
var bar = '5';
console.log('concats', foo+bar);

var foo = 5;
var bar = '5';
console.log('this concats also ', foo+bar);

var foo = 5;
var bar = '5';
console.log('does the math ', foo*bar);

var foo = 5;
var bar = 'b';
console.log('NaN not a number ', foo*bar);

// explicit casting
var foo = '55';
var myNum = Number(foo);
console.log('casts to number ', myNum);

var foo = 'abc';
var myNum = Number(foo);
console.log("can't cast abc to number so NaN ", myNum);

// checking NaN
if (isNaN('abc')) {
    console.log('abc is not a number');
}

if (isNaN('5')) {
    console.log('it is not a number');
} else {
    console.log('5 as string is implictly cast and is a number')
}

if (isNaN(5)) {
    console.log('it is not a number');
} else {
    console.log('5 is a number')
}

// checking NaN
if (!isNaN('abc')) {
    console.log('try 1: is a number');
}

if (!isNaN('5')) {
    console.log('try 2: is a number');
}

if (!isNaN(5)) {
    console.log('try 3: is a number');
}