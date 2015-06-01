var myHeading = document.getElementById('my-heading');
console.log(myHeading);
console.log('This is an element of type: ', myHeading.nodeType);
console.log('The inner HTML is : ', myHeading.innerHTML);

var anchorArray = document.getElementsByTagName('a');
console.log(anchorArray[0]);
console.log('This is an element of type: ', anchorArray[0].nodeType);
console.log('The inner HTML is : ', anchorArray[0].innerHTML);
console.log('There are this many links on this page: ', anchorArray.length);

var myList = document.getElementsByTagName('ul');
console.log('my list: ', myList);

var myListItems = document.getElementsByTagName('li');
var mySecondList = document.getElementById('abc');
var limitedList = mySecondList.getElementsByTagName('li');
console.log('all list items ', myListItems, myListItems.length);
console.log('my second list ', mySecondList);
console.log('my list items ', limitedList, limitedList.length);
