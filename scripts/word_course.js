var myArray = [
  "Apple",
  "Banana",
  "Pear"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];


window.onload = function(){
    document.getElementById("word").innerHTML = randomItem;
}
