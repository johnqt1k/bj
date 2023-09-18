const colors = ["Hearts" , "Spades" , "Clover", "Ruter"];
const demos = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Knight", "Queen", "King", "Ace"];
const cards = [];

for (const color of colors) {
    for (const demo of demos) {
        cards.push(`${demo} i ${color}`);
    }
}

function mixCards (cards) {
    for (let i = cardslength - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}