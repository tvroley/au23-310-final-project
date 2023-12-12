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

    static compareYear(cardA, cardB) {
        return cardA.year - cardB.year;
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

    static castToGradedCard(card) {
        return Object.assign(new GradedCard(), card);
    }

    static compareCertification(cardA, cardB) {
        return cardA.certificationNumber - cardB.certificationNumber;
    }

    static compareSold(cardA, cardB) {
        if(cardA.sold == 'string') {
            cardA.sold = cardA.sold === 'true';
        }
        if(cardB.sold == 'string') {
            cardB.sold = cardB.sold === 'true';
        }
        if(cardA.sold > cardB.sold) {
            return 1;
        } else if(cardA.sold < cardB.sold) {
            return -1;
        }
        return 0;
    }
}