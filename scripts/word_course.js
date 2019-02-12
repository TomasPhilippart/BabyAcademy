var myArray = [
  "Apple",
  "Banana",
  "Pear"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function getStarted() {
   document.getElementById('word').innerHTML = randomItem;
   document.getElementById('word').style.display = "block";
   document.getElementById('hidden').style.display = "none";
}

function showNewWord() {
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById('word').innerHTML = randomItem;
}
