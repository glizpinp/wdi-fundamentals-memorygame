//Create an array to store all card objects
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

//Create an array to store cards in play
var cardsInPlay = [];
//Create a function to check for a match
var checkForMatch = function () {
//Check to see if the two cards played match and provide feedback
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
};

//Create a function to represent the user flipping a card
var flipCard = function () {
//Get data-id of card that was just flipped and store in cardId variable
var cardId = this.getAttribute('data-id');
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].suit);
//Add rank to array of cards that are in play
cardsInPlay.push(cards[cardId].rank);
//Display face of card
this.setAttribute('src' , cards[cardId].cardImage);
//Check to see if two cards have been played
if (cardsInPlay.length === 2) {
checkForMatch();
}
};

//Create a function to create the board
var createBoard = function () {
//Loop through the cards array to create card elements
	for (var i = 0; i < cards.length; i++) {
		//Create an img element and store in cardElement variable
		var cardElement = document.createElement('img');
		//Set the src attribute to display the back of card image
		cardElement.setAttribute('src' , "images/back.png");
		//Set the card's data-d attribute to be the index of the current element
		cardElement.setAttribute('data-id' , i);
		//Add an event listener so when a card is clicked the flipCard function is executed
		cardElement.addEventListener('click' , flipCard);
		//Append cardElement to the game board
		document.getElementById('game-board').appendChild(cardElement);
	}
	};
	
//Call the createBoard function to create the game board
createBoard();