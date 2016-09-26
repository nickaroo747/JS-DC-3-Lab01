//Game Prompt code
var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

prompt.get(['username1', 'username2'], function (err, result) {

  console.log('  username1: ' + result.username1);
  var player1 = result.username1;


  console.log('  username2: ' + result.username2);
  var player2 = result.username2


});

console.log(player1)
console.log(player2)

//Establish Players

//Establish Deck
var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
function createDeck(suits, ranks) {
     var finalDeck = [];
    for (var i = 0; i < suits.length; i++){

    for (var j = 0; j < ranks.length; j++){
        finalDeck.push(ranks[j] + " of " +suits[i]);
    }
    }
    return finalDeck
}
var myDeck = createDeck(suits, ranks);


//Divide the deck into two and give each player half
//myDeck / 2 = 1st 26 = player 1 hand array, 2nd 26 = player 2 array
function dealDeck(){
  var player1 = createDeck.splice(0, 26);
  var player2 = createDeck.splice(27, 52);
}
dealDeck();
// Have each player distribute one card
//var playerOneCard = random selection from player 1 hand array
//var playerOneTwo = random selection from player 2 hand array
function playersCard(){
  var playerOnesCard = Math.floor(Math.random()*player1.length);
  var playerTwosCard = Math.floor(Math.random()*player2.length);
}
playersCard();
console.log(playerOneCard)
console.log(playerTwoCard)

//Weight each player's hand var against the other with if than statement
// if var playerOneCard > playerTwoCard do this else add cards to player'shandtotal & console.log winner
// if var playerOneTwo > playerOneCard do this
function evaluateCards(playerOneCard > playerTwoCard){
  console.log("Player One Wins!")
} else {
  console.log("Player Two Wins!")
}
evaluateCards();
playersCard();

// Establish an ever running function that measures the amount of cards in the players hand and sets off an alert for winner and or loser
