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

window.onclick = showWords();

function showWords() {
  document.getElementById("word").innerHTML = randomItem;
}
