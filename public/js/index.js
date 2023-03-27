// pick a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

// construct the image name using the random number generated
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

// construct the image path using the image name
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

// select first image in the document and set its source to the image path
var image1 = document.querySelectorAll("img")[0];

// select src attribute of the image and set it to the image path
image1.setAttribute("src", randomImageSource);

// Player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;

image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomImageSource2);


// If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 Player 1 wins!'
} 
// If player 2 wins
else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 wins! 🏆"
}
// if draw
else {
    document.querySelector('h1').innerHTML = "That's a draw!"
}