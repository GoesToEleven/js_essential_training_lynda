var images = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg',
    '6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg'];

var myImage = document.querySelector('img');

var index = 0;

function changeImage() {
    myImage.setAttribute('src','images/'+images[index]);
    console.log(index);
    //myImage.setAttribute("src", 'images/' + index + '.jpeg');
    index++;
    if (index >= images.length) {
        index = 0;
    }
}

// setInterval is also in milliseconds
//setInterval(changeImage, 100);
var intervalHandle = setInterval(changeImage, 50);

myImage.onclick = function () {
    clearInterval(intervalHandle);
};
