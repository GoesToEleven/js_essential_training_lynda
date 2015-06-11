// setTimeout
function myMessage() {
    alert('Wassup world');
}
// runs once
setTimeout(myMessage, 3000);

// setInterval
var myList = document.querySelector('ul');
var counter = 1;
function addElements() {
    counter++;
    var myNewElement = document.createElement('li');
    var myText = document.createTextNode(counter);
    myNewElement.appendChild(myText);
    myList.appendChild(myNewElement);
}
// runs repeatedly
setInterval(addElements, 100);


/*
there are also:
    clearTimeout
    clearInterval

use like this:

var intervalHandler = setInterval(someFunc, 2000);

myImage.onclick = function() {
    clearInterval(intervalHandle);
}
 */