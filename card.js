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
    constructor(year, brand, cardSet, cardNumber, player, gradingCompany, grade, certificationNumber, frontCardImageLink, backCardImageLink, sold) {
        super(year, brand, cardSet, cardNumber, player);
        this.gradingCompany = gradingCompany;
        this.grade = grade;
        this.certificationNumber = certificationNumber;
        this.frontCardImageLink = frontCardImageLink;
        this.backCardImageLink = backCardImageLink;
        this.sold = sold;
    }

    toString() {
        return super.toString() + ` ${this.gradingCompany} ${this.grade} certification number: ${this.certificationNumber}`;
    }
}

const cards = [
    new GradedCard(1958, 'Topps', '1958 Topps', 62, 'Jim Brown', 'PSA', '4', '67733031', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/TyLJOT5i7ka5C-qOUAjc-w.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/9Lz9EJNkUU-0ut5gtBhkeg.jpg', true),
    new GradedCard(1963, 'Fleer', '1963 Fleer', '', 'Checklist 1-66', 'PSA', '5', '69683152', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/rhz8nxNC_EG5HFJZW6L6PQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/kMfM2yjrjE2q0AJNQU2OCA.jpg', false),
    new GradedCard(1964, 'Topps', '1964 Topps', 125, 'Pete Rose', 'PSA', '5', '69683153', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162926/IGKIwryO9UGV5QIMbnzWPA.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162926/Oesmk-aEakO7OloQXa5yQA.jpg', true)
];

window.addEventListener('load', function() {
    const cardsContainerEl = document.getElementById('cards-container');
    for(let i = 0; i < cards.length; i++) {
        const currentCard = cards[i];
        const frontImageEl = document.createElement('img');
        const backImageEl = document.createElement('img');
        const divEl = document.createElement('div');
        const pEl = document.createElement('p');
        pEl.innerText = currentCard.toString();
        frontImageEl.src = currentCard.frontCardImageLink;
        backImageEl.src = currentCard.backCardImageLink;
        if(currentCard.sold) {
            divEl.classList.add('sold');
        }
        divEl.appendChild(frontImageEl);
        divEl.appendChild(backImageEl);
        divEl.appendChild(pEl);
        cardsContainerEl.appendChild(divEl);
    }
});

