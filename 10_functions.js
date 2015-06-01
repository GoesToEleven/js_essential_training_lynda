// define your functions before you call them
// functions should be at the top of your javascript code, generally speaking

function myFunction() {
    console.log('this is my function');
}
myFunction();

// taking parameters
function myAddition(x,y) {
    console.log(x+y);
}
myAddition(203,396);

//returning values
function myMult(x,y) {
    return x*y;
}
console.log(myMult(203,396));
var myResult = myMult(2,3);
console.log(myResult);

// extra params are ignored
// returning values
function myMult(x,y) {
    return x*y;
}
console.log(myMult(4,5,6,'food'));
var myResult = myMult(2,3,4);
console.log(myResult);

// scope
// 'var' inside a function creates a variable with the scope of that function - a local variable
//function myFoo(x,y) {
//    var foo = x;
//    var bar = y;
//    console.log(foo, bar);
//}
//myFoo(7,8);
//console.log(foo, bar);
// 'var' outside a function creates a variable with a global scope
var foot, barf;
function myBar(x,y) {
    foot = x;
    barf = y;
    console.log(foot, barf);
}
myBar(7,8);
console.log(foot, barf);
