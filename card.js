class Card {
    constructor(year, brand, cardSet, cardNumber, player) {
        this.year = year;
        this.brand = brand;
        this.cardSet = cardSet;
        this.cardNumber = cardNumber;
        this.player = player;
    }

    toString() {
        return `${this.year} ${this.brand} ${this.cardSet} #${this.cardNumber} ${this.player}`;
    }
}

class GradedCard extends Card {
    constructor(year, brand, cardSet, cardNumber, player, gradingCompany, certificationNumber, gradedLabelTitle, gradedCardImageLink) {
        super(year, brand, cardSet, cardNumber, player);
        this.gradingCompany = gradingCompany;
        this.certificationNumber = certificationNumber;
        this.gradedLabelTitle = gradedLabelTitle;
        this.gradedCardImageLink = gradedCardImageLink;
    }

    toString() {
        return super.toString() + ` ${this.gradedLabelTitle} certification number: ${this.certificationNumber}`;
    }
}