// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World Shine like a candle!' 

var myImage = document.querySelector('img');
//функція яка при кліканні на картинку заміняє на іншу:
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/highlights.jpg'){
        myImage.setAttribute('src','images/firefox2.jpg');
    } else {
        myImage.setAttribute('src','images/highlights.jpg');
    }    
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// функцию для установки персонализированного приветствия:
function setUserName() {
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Candle is cool, ' + myName;
}

// код инициализации, поскольку он структурирует приложение при его первой загрузке:
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Candle is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}