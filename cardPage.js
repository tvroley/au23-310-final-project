window.addEventListener('load', function() {
    const cardsContainerEl = document.getElementById('cards-container');
    const cardFormEl = document.getElementById('card-form');
    const yearEl = document.getElementById('year');
    const brandEl = document.getElementById('brand');
    const setEl = document.getElementById('card-set');
    const numberEl = document.getElementById('card-number');
    const playerEl = document.getElementById('player');
    const gradingCompanyEl = document.getElementById('grading-company');
    const gradeEl = document.getElementById('grade');
    const certificationEl = document.getElementById('certification-number');
    const frontImageEl = document.getElementById('front-image-link');
    const backImageEl = document.getElementById('back-image-link');
    
    const loadCardsContainer = function(myCards) {
        for(let i = 0; i < myCards.length; i++) {
            const currentCard = myCards[i];
            const frontImageEl = document.createElement('img');
            const backImageEl = document.createElement('img');
            const divEl = document.createElement('div');
            divEl.setAttribute('data-cert', `${currentCard.certificationNumber}`);
            divEl.setAttribute('data-year', `${currentCard.year}`);
            divEl.setAttribute('data-sold', `${currentCard.sold}`);
            divEl.classList.add('card-div');
            const pEl = document.createElement('p');
            const soldCheckBox = document.createElement('input');
            const soldCheckBoxId = `sold-checbox-${currentCard.certificationNumber}`;
            soldCheckBox.setAttribute('id', soldCheckBoxId);
            const soldCheckBoxLabel = document.createElement('label');
            soldCheckBoxLabel.setAttribute('for', soldCheckBoxId);
            soldCheckBoxLabel.innerText = 'Sold';
            soldCheckBox.setAttribute('type', 'checkbox');
            pEl.innerText = currentCard.toString();
            frontImageEl.src = currentCard.frontCardImageLink;
            backImageEl.src = currentCard.backCardImageLink;
            if(currentCard.sold) {
                divEl.classList.add('sold');
                soldCheckBox.checked = true;
            } else {
                divEl.classList.add('unsold');
                soldCheckBox.checked = false;
            }
            divEl.appendChild(pEl);
            divEl.appendChild(frontImageEl);
            divEl.appendChild(backImageEl);
            divEl.appendChild(soldCheckBoxLabel);
            divEl.appendChild(soldCheckBox);
            soldCheckBox.addEventListener('change', function(e) {
                e.stopPropagation();
                if(soldCheckBox.checked) {
                    soldCheckBox.parentElement.classList.add('sold');
                    soldCheckBox.parentElement.classList.remove('unsold');
                } else {
                    soldCheckBox.parentElement.classList.remove('sold');
                    soldCheckBox.parentElement.classList.add('unsold');
                }
            });

            cardsContainerEl.appendChild(divEl);
        }
    }
    
    cardsContainerEl.addEventListener('click', function(event) {
        event.stopPropagation();
        const el = event.target;
        if(el.tagName === 'IMG') {
            window.open(el.src);
        }
    });
    
    const loadLocalStorageCards = function() {
        const cardsWord = localStorage.getItem('cards');
        if(cardsWord) {
            cardsContainerEl.innerHTML = '';
            let myCards = JSON.parse(cardsWord);
            cards = myCards.map(GradedCard.castToGradedCard);
            loadCardsContainer(cards);
            return true;
        } else {
            return false;
        }
    }
    
    if(!loadLocalStorageCards()){
        loadCardsContainer(cards);
    }
    
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.setAttribute('type', 'button');
    cardsContainerEl.insertAdjacentElement('beforebegin', saveButton);
    
    saveButton.addEventListener('click', function(event) {
        event.stopPropagation();
        for(let i = 0; i < cards.length; i++) {
            const soldCheckBox = document.getElementById(`sold-checbox-${cards[i].certificationNumber}`);
            cards[i].sold = soldCheckBox.checked;
        }
        const cardsWord = JSON.stringify(cards);
        localStorage.setItem('cards', cardsWord);
    });

    const loadButton = document.createElement('button');
    loadButton.innerText = 'Load';
    loadButton.setAttribute('type', 'button');
    cardsContainerEl.insertAdjacentElement('beforebegin', loadButton);
    
    loadButton.addEventListener('click', function(event) {
        event.stopPropagation();
        loadLocalStorageCards();
    });

    const sortCardElements = function(sortFunc) {
        const cardEls = document.getElementsByClassName('card-div');
        const cardElArray = Array.from(cardEls);
        cardsContainerEl.innerHTML = '';
        cardElArray.sort(sortFunc);
        cardElArray.forEach((e) => cardsContainerEl.appendChild(e));
    };

    const certSortButton = document.createElement('button');
    certSortButton.innerText = 'Sort By Certification Number';
    certSortButton.setAttribute('type', 'button');
    cardsContainerEl.insertAdjacentElement('beforebegin', certSortButton);

    certSortButton.addEventListener('click', (event) => {
        event.stopPropagation();
        cards.sort(GradedCard.compareCertification);
        sortCardElements((a, b) => a.dataset.cert - b.dataset.cert);
    });

    const yearSortButton = document.createElement('button');
    yearSortButton.innerText = 'Sort By Year';
    yearSortButton.setAttribute('type', 'button');
    cardsContainerEl.insertAdjacentElement('beforebegin', yearSortButton);

    yearSortButton.addEventListener('click', (event) => {
        event.stopPropagation();
        cards.sort(GradedCard.compareYear);
        sortCardElements((a, b) => a.dataset.year - b.dataset.year);
    });

    const soldSortButton = document.createElement('button');
    soldSortButton.innerText = 'Sort By Sold Status';
    soldSortButton.setAttribute('type', 'button');
    cardsContainerEl.insertAdjacentElement('beforebegin', soldSortButton);

    const sortSoldEls = function(a, b) {
        if(a.dataset.sold > b.dataset.sold) {
            return 1;
        } else if(a.dataset.sold < b.dataset.sold) {
            return -1;
        }
        return 0;
    };

    soldSortButton.addEventListener('click', (event) => {
        event.stopPropagation();
        cards.sort(GradedCard.compareSold);
        sortCardElements(sortSoldEls);
    });

    cardFormEl.addEventListener("submit", (e) => {
        const year = yearEl.value.trim();
        const brand = brandEl.value.trim();
        const cardSet = setEl.value.trim();
        const cardNumber = numberEl.value.trim();
        const player = playerEl.value.trim();
        const gradingCompany = gradingCompanyEl.value.trim();
        const grade = gradeEl.value.trim();
        const certificationNumber = certificationEl.value.trim();
        const frontCardImageLink = frontImageEl.value.trim();
        const backCardImageLink = backImageEl.value.trim();
        const currentCard = new GradedCard(year, brand, cardSet, cardNumber, player, gradingCompany, grade, certificationNumber, frontCardImageLink, backCardImageLink);
        cards.push(currentCard);
        loadCardsContainer(cards);
        const cardsWord = JSON.stringify(cards);
        localStorage.setItem('cards', cardsWord);
    });

    const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    const url = `${BASE_URL}?q=topps+fanatics&api-key=${API_KEY}`;
    fetch(url).then(function(data) {
        return data.json();
    })
    .then(function(responseJson) {
        if(responseJson.response.docs[0]) {
            const headline = responseJson.response.docs[0].headline.print_headline;
            const headlineEl = document.createElement('p');
            headlineEl.innerText = `Sports Cards News: ${headline}`;
            cardFormEl.insertAdjacentElement('beforebegin', headlineEl);
        }
    }).catch(function(err) {
        console.log(err);
        return 'No news';
    });
});