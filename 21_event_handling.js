/*
events are typically all written in lowercase:
onload
onclick
onblur
onfocus
onmouseover

THREE METHODS
for handling events

---- inline ----
<button onclick="alert('hello');">
Click me
</button>

---- anonymous function ----
---- element.event = function() { ... code ... }; ----
window.onload = function() { ... code ... };
nameField.onblur = function() { ... code ... };
myElement.onclick = function() { ... code ... };

---- listener ----
document.addEventListener('click', myFunction, false);
document.addEventListener('click', anotherFunction, false);
document.removeEventListener('click', anotherFunction, false);

IE < 9 not have addEventListener
this is why JQUERY used to be valuable

*/


// anonymous function
document.onclick = function() {
    alert('You clicked somewhere in the document');
};

//listener
var myImg = document.querySelector('img');
function myFunction() {
    alert('You clicked the image');
}
myImg.addEventListener('click', myFunction, false);