const cardslength = 52; //represent how many cards there is
const colors = ["Hearts" , "Spades" , "Clover", "Ruter"]; // shows all diffrent types off colors
const demos = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Knight", "Queen", "King", "Ace"]; // shows all diffrent types of cards
const cards = []; // a array where the cards are stored

for (const color of colors) { //two for-loops where one of the loop go over every color, and the other one every number, for each color and demo a string is made
    for (const demo of demos) {
        cards.push(`${demo} i ${color}`);
    }
}

function mixCards (cards) { //the for function goes thru the 52 cards down to 1 and de loop inside choose a random card (i) to change place with (j)
    for (let i = cardslength - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function countPoints(hand) {
    let points = 0;
    let aces = 0;

    for (const card of hand) {
        const demo = card.split(" ")[0];

    if (demo === "Ace") {
        aces++;
        points += 11;
    } else if (demo === "Knight" || demo === "Queen" || demo === "King") {
        points += 10
    } else {
        points += parseInt(demo, 10)
        }ceo
    }

    while (points > 21 && aces > 0) {
        points -= 10;
        aces--;
    }

    return points;
}

function showHand (hand, player) {
    console.log(`${player}'s hand:`);
    for (const card of hand) {
        console.log(card);
    }
    console.log(`Points: ${countPoints(hand)}`);
}

mixCards(cards);

const playerHand = [cards.pop(), cards.pop()];
const dealerHand = [cards.pop(), cards.pop()];

showHand(playerHand, "Player");
console.log(`Dealerns hand:\n${dealerHand[0]}\nDolt kort`);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function gameGoing () {
    rl.question("DO you wanna hit (h) or stand (s)", (answer) =>  {
        if(answer==="h") {

            const newCard = cards.pop();
            playerHand.push(newCard);
            console.log(`You drew: ${newCard}`);
            showHand(playerHand, "Player");

            if (countPoints(playerHand) > 21) {
                console.log("You have lost!");
                rl.close();
            } else {
                gameGoing ();
            }
        } else if (answer === "s") {
            showHand(dealerHand, "Dealern");
            while (countPoints(dealerHand) < 17) {
                const newCard = cards.pop();
                dealerHand.push(newCard);
                console.log(`Dealern drew: ${newCard}`);
            }
            showHand(dealerHand, "Dealern");

            const playerPoints = countPoints(playerHand);
            const dealerPoints = countPoints(dealerHand);

            if (playerPoints > 21 || (dealerPoints >= playerPoints && dealerPoints <= 21)) {
                console.log("Dealer Wins!");
        } else if (playerPoints === dealerPoints) {
            console.log("Its even!");
        } else {
            console.log("Congrats, You win!");
        }
        rl.close();
     } else {
        console.log("Invalid selection. Choose 't' to take a card or 's' to stand.");
     }
    });
}

gameGoing();