class Card {
    constructor(year, brand, cardSet, cardNumber, player) {
        this.year = year;
        this.brand = brand;
        this.cardSet = cardSet;
        this.cardNumber = cardNumber;
        this.player = player;
    }

    toString() {
        return `${this.cardSet} #${this.cardNumber} ${this.player}`;
    }
}

class GradedCard extends Card {
    constructor(year, brand, cardSet, cardNumber, player, gradingCompany, grade, certificationNumber, gradedCardImageLink) {
        super(year, brand, cardSet, cardNumber, player);
        this.gradingCompany = gradingCompany;
        this.grade = grade;
        this.certificationNumber = certificationNumber;
        this.gradedCardImageLink = gradedCardImageLink;
    }

    toString() {
        return super.toString() + ` ${this.gradingCompany} ${this.grade} certification number: ${this.certificationNumber}`;
    }
}

const cards = [
    new GradedCard(1958, 'Topps', '1958 Topps', 62, 'Jim Brown', 'PSA', '4', '67733031', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/TyLJOT5i7ka5C-qOUAjc-w.jpg'),
    new GradedCard(1963, 'Fleer', '1963 Fleer', '', 'Checklist 1-66', 'PSA', '5', '69683152', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/rhz8nxNC_EG5HFJZW6L6PQ.jpg')
];

window.addEventListener('load', function() {
    const divEl = document.getElementById('cards-container');
    for(let i = 0; i < cards.length; i++) {
        const currentCard = cards[i];
        const imageEl = document.createElement('img');
        imageEl.src = currentCard.gradedCardImageLink;
        divEl.appendChild(imageEl);
    }
});

