var foods = ["pizza", "chicken", "sushi", "steak", "banana", "strawberry", "pasta", "asparagus", "lobster",
 "crab", "sandwich", "brownie", "cookie", "cupcake", "eggs", "lasagna", "hamburger", "cheeseburger", "orange", "zuchinni"]
var randomNumber = Math.floor(Math.random() * 20);
var selection = foods[randomNumber];
var lengthOfWord = selection.length;
var blankWord = [];
var keyName;
var letterIndex;
var letterInWord;
var missedLetters = [];
var wins = 0;
var lose = 0;
var imageArray = ["assets/images/hangman.gif", "assets/images/hangman-head.png","assets/images/hangman-body.png", "assets/images/hangman-arm.png",
"assets/images/hangman-arms.png","assets/images/hangman-leg.png", "assets/images/hangman-dead.png"];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//function for game reset when button is pressed
function resetGame() {
    randomNumber = Math.floor(Math.random() * 20);
    selection = foods[randomNumber];
    lengthOfWord = selection.length;
    missedLetters = [];
    blankWord = [];
    document.getElementById('picture').src = "assets/images/hangman.gif";   
    for (var i = 0; i < lengthOfWord; i++) {
        blankWord[i] = '_';
    }
    document.getElementById('reset-button').style.display = "none";
    document.getElementById('start-message').style.display = "block";
document.getElementById('word').innerHTML = blankWord.join(" ");
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('lose').innerHTML = "Losses: " + lose;
document.getElementById('missed-letters').innerHTML = missedLetters.join(" ");
document.getElementById('final-word').innerHTML = "";

}

//Creating array with no letters (al dashes)
for (var i = 0; i < lengthOfWord; i++) {
    blankWord[i] = '_';
}
//Presenting initial information
document.getElementById('word').innerHTML = blankWord.join(" ");
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('lose').innerHTML = "Losses: " + lose;


//Event listener for keystroke
document.onkeyup = function(event) {
    document.getElementById('start-message').style.display = "none";
    keyName = event.key;
    keyName = keyName.toLowerCase();
    //Stopping the ability to have the game continue if someone has lost or won
    if(missedLetters.length < 6 && blankWord.join("") !== selection && alphabet.indexOf(keyName) !== -1) {

    letterInWord = false;
    //Condition if to make game only run if the letter is unique
    if(missedLetters.indexOf(keyName) === -1 && blankWord.indexOf(keyName) === -1) {
    for (var i = 0; i < selection.length; i++) {
        if (selection[i] === keyName) {
            var letterIndex = selection.indexOf(keyName, i);
            letterInWord = true;
            blankWord[letterIndex] = keyName;
        }
    }
    //If letter is not in the word
    if (!letterInWord) {
        missedLetters.push(keyName);
        document.getElementById('picture').src = imageArray[missedLetters.length];
       
    }
}
//Tracking a win and adding to wins
    if (blankWord.join("") == selection) {
        wins++;

    }
//Tracking a loss and adding to losses
    if (missedLetters.length == 6) {
        lose++;
        document.getElementById('final-word').innerHTML = 'Your word was: <h3 style="margin-top: 0px; color:green;">' + selection + "</h3>";
    }
//If you win or lose, showing the reset button
    if (missedLetters.length == 6 || blankWord.join("") == selection) {
        document.getElementById('reset-button').style.display = "block";
    }
//Updating presented information on page after each keystroke      
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('missed-letters').innerHTML = missedLetters.join(" ");
    document.getElementById('word').innerHTML = blankWord.join(" ");
    document.getElementById('lose').innerHTML = "Losses: " + lose;
}
};