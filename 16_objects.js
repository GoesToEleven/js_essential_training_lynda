// arrays are objects
var myArray = [10,20,30,'forty',50];
console.log(myArray.length);

// dates are objects
var todaysDate = new Date();
var ms = todaysDate.getTime();
console.log(ms);

/*

 And at its core, the idea of an object is really simple.
 It's just a container that gathers together some data and some behavior.
 So we know how to make variables. We know how to make functions.
 An object just allows us to gather variables and functions that belong together
 and give them a name.
 - lynda.com simon allardice

 */


// creates a generic object container and calls it 'player'
// and adds properties (variables) to the object
var player = new Object();
player.name = 'Todd';
player.score = 100;
player.rank = 1;

// shorthand
var player1 = {name: 'Fred', score: 80, rank: 2};
var player2 = {name: 'Sam', score: 77, rank: 3};

// show properties
console.log(player.name);
console.log(player1.name);
console.log(player2.name);


// attach methods (functions)
function playerDetails() {
    console.log(this.name, this.score, this.rank);
}
player.logDetails = playerDetails;
player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

// show properties using method
player.logDetails();
player1.logDetails();
player2.logDetails();



