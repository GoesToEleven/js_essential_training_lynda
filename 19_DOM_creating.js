/*

 While you could use the innerHTML method to just write out a bunch of HTML
 and dump it into a position in your document, it's not a clean way to do it,
 and it's easy to make a mistake. The best way is to start manually creating
 and inserting individual DOM element nodes into your document, and this is
 a very powerful technique to learn. It lets you change your page on the fly
 and to do it, there's always two steps:

 1. create the element
 2. add it to the document

 */

var myElement = document.getElementById('list');
var myNewElement = document.createElement('li');
myElement.appendChild(myNewElement);

var myText = document.createTextNode('New list item text');
myNewElement.appendChild(myText);

// another example

var anotherNewElement = document.createElement('li');
