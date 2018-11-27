var deckCards = []
var suits = ["clubs", "diamonds", "hearts", "spades"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack", "Ace"];
var deckMixed = [];
var player, computer, playerCard, computerCard, playerCardAll, computerCardAll;
var countPlayer = countComputer = 0;
function deck() {
    for (a = 0; a < suits.length; a++) {
        for (i = 0; i < values.length; i++) {
            var cards = {
                suit: suits[a],
                value: values[i]
            }
            deckCards.push(cards);
        }
    }
    mixed()
}
function mixed() {
    for (a = 0; a < deckCards.length; a++) {
        var te = deckCards[Math.floor(Math.random() * deckCards.length)]
        deckMixed.push(te)
    }
    cut()
}
function cut() {
    var indexToSplit = deckMixed.indexOf(deckMixed[26]);
    player = deckMixed.slice(0, indexToSplit);
    computer = deckMixed.slice(indexToSplit + 0);
    console.log(player, computer)
    start();
}
function start() {
    if (player.length == 26) {
        var i = 26;
        while (i > 0) {
            playerCardAll = player[0]
            playerCard = player[0].value
            player.shift(playerCard)
            computerCardAll = computer[0]
            computerCard = computer[0].value
            computer.shift(computerCard)
            alert("your card is : " + JSON.stringify(playerCardAll, null, 4));
            alert("the computer card is : " + JSON.stringify(computerCardAll, null, 4));
            console.log(i)
            if (playerCard < computerCard) {
                countComputer++
                alert("you lose,your score is: " + countPlayer + ",and the score of the computer is:" + countComputer);
                i -= 1;
            } else if (playerCard > computerCard) {
                countPlayer++;
                alert("you win,your score is: " + countPlayer + ",and the score of the computer is:" + countComputer);
                i -= 1;
            } else {
                alert("draw,your score is: " + countPlayer + ",and the score of the computer is:" + countComputer);
                i -= 1;
            }
        }
    } else {
        location.reload();
    }
}