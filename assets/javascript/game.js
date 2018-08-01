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
var letterInWord;
var missedLetters = [];
var wins = 0;
var lose = 0;
var imageArray = ["assets/images/hangman.gif", "assets/images/hangman-head.png","assets/images/hangman-body.png", "assets/images/hangman-arm.png",
"assets/images/hangman-arms.png","assets/images/hangman-leg.png", "assets/images/hangman-dead.png"];
//function for game reset when button is pressed
function resetGame() {
    randomNumber = Math.floor(Math.random() * 20);
    selection = foods[randomNumber];
    console.log(selection);
    lengthOfWord = selection.length;
    missedLetters = [];
    blankWord = [];
    document.getElementById('picture').src = "assets/images/hangman.gif";   
    for (var i = 0; i < lengthOfWord; i++) {
        blankWord[i] = '_';
    } 
    document.getElementById('reset-button').style.display = "none";
document.getElementById('word').innerHTML = blankWord.join(" ");
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('lose').innerHTML = "Losses: " + lose;
document.getElementById('missed-letters').innerHTML = missedLetters.join(" ");
document.getElementById('final-word').innerHTML = "";

}

//Creating string with no letters
for (var i = 0; i < lengthOfWord; i++) {
    blankWord[i] = '_';
}
//Presenting initial information
document.getElementById('word').innerHTML = blankWord.join(" ");
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('lose').innerHTML = "Losses: " + lose;


//Event listener for keystroke
document.addEventListener('keypress', (event) => {
    if(missedLetters.length < 6 && blankWord.length < (selection.length + 1)){
    keyName = event.key;
    keyName = keyName.toLowerCase();
    console.log(keyName);
    letterInWord = false;
    //Condition if to make game only run if the letter is unique
    if(missedLetters.indexOf(keyName) === -1 && blankWord.indexOf(keyName) === -1) {
    for (var i = 0; i < selection.length; i++) {
        if (selection[i] === keyName) {
            console.log('that is a letter in our word!');
            var letterIndex = selection.indexOf(keyName, i);
            console.log(letterIndex);
            letterInWord = true;
            blankWord[letterIndex] = keyName;
        }
    }
    if (!letterInWord) {
        console.log('This letter is not in the word');
        missedLetters.push(keyName);
        document.getElementById('picture').src = imageArray[missedLetters.length];
    }
} else {
    console.log('you already used that letter');
}
    if (blankWord.join("") == selection) {
        console.log('You Won!');
        wins++;

    }

    if (missedLetters.length == 6) {
        console.log('You lose');
        lose++;
        document.getElementById('final-word').innerHTML = 'Your word was: ' + selection;
    }

    if (missedLetters.length == 6 || blankWord.join("") == selection) {
        document.getElementById('reset-button').style.display = "block";
    }
        
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('missed-letters').innerHTML = missedLetters.join(" ");
    document.getElementById('word').innerHTML = blankWord.join(" ");
    document.getElementById('lose').innerHTML = "Losses: " + lose;
}
});