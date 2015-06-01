// myElement.getAttribute('name')
// myElement.setAttribute('name', 'value')

var mainContent = document.getElementById('mainContent');
mainContent.setAttribute('align', 'right');

var mainTitle = document.getElementsByTagName('h1');
console.log(mainTitle[0].innerHTML);
console.log(mainTitle[1].innerHTML);

var myList = document.getElementById('list');
console.log(typeof myList);
console.log(myList.innerHTML);
