// create api-key.js file with const API_KEY="your_api_key" in this same directory
const cards = [
    new GradedCard(1958, 'Topps', '1958 Topps', 62, 'Jim Brown', 'PSA', '4', '67733031', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/TyLJOT5i7ka5C-qOUAjc-w.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/132113359/9Lz9EJNkUU-0ut5gtBhkeg.jpg', true),
    new GradedCard(1963, 'Fleer', '1963 Fleer', '', 'Checklist 1-66', 'PSA', '5', '69683152', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/rhz8nxNC_EG5HFJZW6L6PQ.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162925/kMfM2yjrjE2q0AJNQU2OCA.jpg', false),
    new GradedCard(1964, 'Topps', '1964 Topps', 125, 'Pete Rose', 'PSA', '5', '69683153', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162926/IGKIwryO9UGV5QIMbnzWPA.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162926/Oesmk-aEakO7OloQXa5yQA.jpg', true),
    new GradedCard(1964, 'Topps', '1964 Topps', 200, 'Sandy Koufax', 'PSA', '6', '69683154', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162927/fwKUq0ppJUuI8gFuTb8RYw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162927/eDy2AmnvkkSEssUMz3XZoQ.jpg', true),
    new GradedCard(1964, 'Topps', '1965 Topps', 300, 'Sandy Koufax', 'PSA', '7', '69683155', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162928/9B6T1van80ywyrrCHCk-Ow.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162928/_elZEpRT0Ee-et4nv4LMkw.jpg', true),
    new GradedCard(1963, 'Fleer', '1963 Fleer', 42, 'Sandy Koufax', 'PSA', '7', '69683156', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162929/q3qD0HtaX06lU8JgGyMcFw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162929/_IMzMlcTKUewWSio8Gr6RA.jpg', true),
    new GradedCard(1962, 'Topps', '1962 Topps', 387, 'Lou Brock', 'PSA', '4', '69683157', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162930/OOMfCzB6nkK03AvutcPlCw.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162930/sHsCZ_9Nak-tA0pSpcClVw.jpg', true),
    new GradedCard(1965, 'Topps', '1965 Topps', 250, 'Willie Mays', 'PSA', '6', '69683158', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/UquW7P2Yv0qrT3dULv41sg.jpg', 'https://d1htnxwo4o0jhw.cloudfront.net/cert/134162931/YTk_a4fPJEqQEudsAlr8Lg.jpg', true)
];

window.addEventListener('load', function() {
    const cardsContainerEl = document.getElementById('cards-container');
    const loadCardsContainer = function(myCards) {
        for(let i = 0; i < myCards.length; i++) {
            const currentCard = myCards[i];
            const frontImageEl = document.createElement('img');
            const backImageEl = document.createElement('img');
            const divEl = document.createElement('div');
            divEl.setAttribute('cardIndex', i);
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
    loadCardsContainer(cards);
    const container = document.getElementsByClassName('container')[0];
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.setAttribute('type', 'button');
    container.insertAdjacentElement('beforebegin', saveButton);
    saveButton.addEventListener('click', function(event) {
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
    saveButton.insertAdjacentElement('afterend', loadButton);
    loadButton.addEventListener('click', function(event) {
        const cardsWord = localStorage.getItem('cards');
        if(cardsWord) {
            cardsContainerEl.innerHTML = '';
            let myCards = JSON.parse(cardsWord);
            myCards = myCards.map(GradedCard.castToGradedCard);
            loadCardsContainer(myCards);
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
            cardsContainerEl.insertAdjacentElement('beforebegin', headlineEl);
        }
    }).catch(function(err) {
        console.log(err);
        return 'No news';
    });
});