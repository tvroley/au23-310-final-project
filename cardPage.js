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
    const cardsButtonsEl = document.getElementById('cards-buttons');
    const certErrorEl = document.getElementById('certification-error');

    const removeAllChildren = function(el) {
        let currentChild = el.lastChild;
        while(currentChild) {
            currentChild.remove();
            currentChild = el.lastChild;
        }
    }

    const createCardEl = function(currentCard) {
        const frontImageEl = document.createElement('img');
        const backImageEl = document.createElement('img');
        const cardPicturesEl = document.createElement('div');
        const cardInfoEl = document.createElement('div');
        cardInfoEl.classList.add('div-card-info');
        cardPicturesEl.classList.add('div-card-images');
        cardPicturesEl.appendChild(frontImageEl);
        cardPicturesEl.appendChild(backImageEl);
        const divEl = document.createElement('div');
        divEl.setAttribute('data-cert', `${currentCard.certificationNumber}`);
        divEl.setAttribute('data-year', `${currentCard.year}`);
        divEl.setAttribute('data-sold', currentCard.sold);
        divEl.classList.add('div-card');
        const divElId = `div-card-${currentCard.certificationNumber}`;
        divEl.setAttribute('id', divElId);
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
        cardInfoEl.appendChild(pEl);
        cardInfoEl.appendChild(soldCheckBoxLabel);
        cardInfoEl.appendChild(soldCheckBox);
        if(currentCard.sold === true || currentCard.sold === 'true') {
            divEl.classList.add('sold');
            soldCheckBox.checked = true;
        } else {
            divEl.classList.add('unsold');
            soldCheckBox.checked = false;
        }
        divEl.appendChild(cardPicturesEl);
        divEl.appendChild(cardInfoEl);

        return divEl;
    }

    const loadCardsContainer = function(myCards) {
        for(let i = 0; i < myCards.length; i++) {
            const currentCard = myCards[i];
            const currentCardEl = createCardEl(currentCard);
            cardsContainerEl.appendChild(currentCardEl);
        }
    }
    
    cardsContainerEl.addEventListener('click', function(event) {
        event.stopPropagation();
        const el = event.target;
        if(el.tagName === 'IMG') {
            window.open(el.src);
        }
    });

    cardsContainerEl.addEventListener('change', function(event) {
        event.stopPropagation();
        const el = event.target;
        if(el.tagName === 'INPUT') {
            const currentCardDiv = el.parentElement.parentElement;
            const currentCard = cards.find(card => {
                return card.certificationNumber == currentCardDiv.dataset.cert;
            });
            if(el.checked) {
                currentCardDiv.classList.add('sold');
                currentCardDiv.classList.remove('unsold');
                currentCardDiv.dataset.sold = true;
                currentCard.sold = true;
            } else {
                currentCardDiv.classList.remove('sold');
                currentCardDiv.classList.add('unsold');
                currentCardDiv.dataset.sold = false;
                currentCard.sold = false;
            }
        }
    });
    
    const loadLocalStorageCards = function() {
        const cardsWord = localStorage.getItem('cards');
        if(cardsWord) {
            removeAllChildren(cardsContainerEl);
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
    saveButton.classList.add('div-card-button');
    cardsButtonsEl.appendChild(saveButton);
    
    saveButton.addEventListener('click', function(event) {
        event.stopPropagation();
        const cardsWord = JSON.stringify(cards);
        localStorage.setItem('cards', cardsWord);
    });

    const loadButton = document.createElement('button');
    loadButton.innerText = 'Load';
    loadButton.setAttribute('type', 'button');
    loadButton.classList.add('div-card-button');
    cardsButtonsEl.appendChild(loadButton);
    
    loadButton.addEventListener('click', function(event) {
        event.stopPropagation();
        loadLocalStorageCards();
    });

    const sortCardElements = function(sortFunc) {
        const cardEls = document.getElementsByClassName('div-card');
        const cardElArray = Array.from(cardEls);
        cardsContainerEl.innerHTML = '';
        cardElArray.sort(sortFunc);
        cardElArray.forEach((e) => cardsContainerEl.appendChild(e));
    };

    const certSortButton = document.createElement('button');
    certSortButton.innerText = 'Sort By Certification Number';
    certSortButton.setAttribute('type', 'button');
    certSortButton.classList.add('div-card-button');
    cardsButtonsEl.appendChild(certSortButton);

    certSortButton.addEventListener('click', (event) => {
        event.stopPropagation();
        cards.sort(GradedCard.compareCertification);
        sortCardElements((a, b) => a.dataset.cert - b.dataset.cert);
    });

    const yearSortButton = document.createElement('button');
    yearSortButton.innerText = 'Sort By Year';
    yearSortButton.setAttribute('type', 'button');
    yearSortButton.classList.add('div-card-button');
    cardsButtonsEl.appendChild(yearSortButton);

    yearSortButton.addEventListener('click', (event) => {
        event.stopPropagation();
        cards.sort(GradedCard.compareYear);
        sortCardElements((a, b) => a.dataset.year - b.dataset.year);
    });

    const soldSortButton = document.createElement('button');
    soldSortButton.innerText = 'Sort By Sold Status';
    soldSortButton.setAttribute('type', 'button');
    soldSortButton.classList.add('div-card-button');
    cardsButtonsEl.appendChild(soldSortButton);

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
        cards = cards.sort(GradedCard.compareSold);
        sortCardElements(sortSoldEls);
    });

    const validateCert = function(cert) {
        const foundCard = cards.find((card) => card.certificationNumber === cert);
        if(foundCard) {
            certificationEl.classList.add('invalid');
            certErrorEl.textContent = `card with certification number of ${cert} already submitted`;
            certErrorEl.classList.remove('hidden');
            return false;
        } else {
            certificationEl.classList.remove('invalid');
            certErrorEl.innerText = '';
            certErrorEl.classList.add('hidden');
            return true;
        }
    };

    cardFormEl.addEventListener("submit", (e) => {
        e.stopPropagation();
        e.preventDefault();

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
        
        if(validateCert(certificationNumber)) {
            const currentCard = new GradedCard(year, brand, cardSet, cardNumber, player, gradingCompany, grade, certificationNumber, frontCardImageLink, backCardImageLink, false);
            cards.push(currentCard);
            const cardEl = createCardEl(currentCard);
            cardsContainerEl.appendChild(cardEl);
        }
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
            headlineEl.classList.add('centered-text');
            cardFormEl.insertAdjacentElement('beforebegin', headlineEl);
        }
    }).catch(function(err) {
        console.log(err);
        return 'No news';
    });
});