/*

 allowed:
    letters
    numbers
    underscore
    $

 can't start with a number
 no spaces are allowed

 */

// declare
var year;

// assign
year = 2015;
console.log('year: ' + year);

// initialize
var x = 200;
console.log('x: ' + x);

/*

keyword 'var' not technically required
good to always use it

 */

// case sensitive
X = 400;
console.log('x: ' + x);
console.log('X: ' + X);


// can do it this way

var day, month, year;
day = 'Monday';
month = 'June';
year = '2015';

// can do it this way also

var day = 'Tuesday', month = 'July', year = '2015';
console.log(day, month, year)

/*
js is weakly typed
you don't need to specify the type
*/


var myVariable;
myVariable = 10;
console.log(myVariable);
myVariable = 'Hello';
console.log(myVariable);

// strings - single or double quotes
var myName = 'Todd';
console.log(myName);
myName = "Todd";
console.log(myName);

// booleans

var result = true;
console.log(result);
result = false;
console.log(result);
