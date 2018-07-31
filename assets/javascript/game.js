var foods = ["pizza", "chicken", "sushi", "steak", "banana", "strawberry", "pasta", "asparagus", "lobster",
 "crab", "sandwich", "brownie", "cookie", "cupcake", "eggs", "lasagna", "hamburger", "cheeseburger", "orange", "zuchinni"]
var randomNumber = Math.floor(Math.random() * 20);
var selection = foods[randomNumber];
var lengthOfWord = selection.length;
console.log(selection);
console.log(lengthOfWord);
var blankWord = [];
var keyName;
var letterIndex;

// Setting array to be all underscores and creating a string to show with no letters

//Showing string with no letters
for (var i = 0; i < lengthOfWord; i++) {
    blankWord[i] = '_';
}
document.getElementById('word').innerHTML = blankWord;
document.addEventListener('keypress', (event) => {
    keyName = event.key;
    for (var i = 0; i < selection.length; i++) {
        if (selection[i] === keyName) {
            console.log('that is a letter in our word!');
            var letterIndex = selection.indexOf(keyName, i);
            console.log(letterIndex);
            blankWord[letterIndex] = keyName;
        }
    }
    document.getElementById('word').innerHTML = blankWord;
  });