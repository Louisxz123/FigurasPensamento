const figures = ['Litote:Afirmação poder meio de uma negação', 'Prosopopeia:Atributos humano em seres innimados', 'Ironia:Expressão contrária ao que quer dizer', 'Antítese:Duas palavras com sentidos contrários', 'Paradoxo:Ideias com sentidos contrários', 'Disfemismo:Palavra ou expressão usada com agressividade', 'Hipérbole:Exagero proposital', 'Apóstrofe:Ênfase dada a uma palavra ou expressão'];

const gameContainer = document.getElementById('game-container');

const cards = [...figures, ...figures];

cards.sort(() => Math.random() - 0.5);

let flippedCards = [];
let matchedCards = [];

function createCard(index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = index;
    card.textContent = '?';
    card.addEventListener('click', () => flipCard(card));
    gameContainer.appendChild(card);
}

function flipCard(card) {
    const index = card.dataset.index;
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
        card.textContent = cards[index];
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;
            if (firstCard.textContent === secondCard.textContent) {
                matchedCards.push(firstCard, secondCard);
                flippedCards = [];
            } else {
                setTimeout(() => {
                    firstCard.textContent = secondCard.textContent = '?';
                    flippedCards = [];
                }, 1000);
            }
        }
    }

    if (matchedCards.length === cards.length) {
        setTimeout(() => {
            alert('Parabéns! Você ganhou!');
        }, 500);
    }
}

cards.forEach((_, index) => createCard(index));