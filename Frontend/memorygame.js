const cardArray = [
    // objects


    {
        name: 'running',
        img: 'images/running.png',
        message: 'Running regularly can improve cardiovascular health, boost mood, and enhance cognitive function, which may help in managing dementia symptoms.'
    },
    {
        name: 'instrument',
        img: 'images/instrument.png',
        message: 'Playing a musical instrument can improve memory, enhance coordination, and stimulate brain function, which can be beneficial for individuals with dementia.'
    },
    {
        name: 'running',
        img: 'images/running.png',
        message: 'Running regularly can improve cardiovascular health, boost mood, and enhance cognitive function, which may help in managing dementia symptoms.'
    },
    {
        name: 'instrument',
        img: 'images/instrument.png',
        message: 'Playing a musical instrument can improve memory, enhance coordination, and stimulate brain function, which can be beneficial for individuals with dementia.'
    },
    {
        name: 'yoga',
        img: 'images/yoga.png',
        message: 'Yoga helps reduce stress and anxiety, improves flexibility, and promotes overall mental well-being.'
    },
    {
        name: 'music',
        img: 'images/music.png',
        message: 'Listening to music can improve mood, reduce stress, and enhance cognitive performance.'
    }, {
        name: 'communication',
        img: 'images/communication.png',
        message: 'Effective communication skills are essential for building relationships, resolving conflicts, and achieving personal and professional success.'
    },
    {
        name: 'sports',
        img: 'images/sports.png',
        message: 'Participating in sports helps improve physical fitness, teaches teamwork and discipline, and boosts mental health.'
    },
    {
        name: 'yoga',
        img: 'images/yoga.png',
        message: 'Yoga helps reduce stress and anxiety, improves flexibility, and promotes overall mental well-being.'
    },
    {
        name: 'music',
        img: 'images/music.png',
        message: 'Listening to music can improve mood, reduce stress, and enhance cognitive performance.'
    }, {
        name: 'communication',
        img: 'images/communication.png',
        message: 'Effective communication skills are essential for building relationships, resolving conflicts, and achieving personal and professional success.'
    },
    {
        name: 'sports',
        img: 'images/sports.png',
        message: 'Participating in sports helps improve physical fitness, teaches teamwork and discipline, and boosts mental health.'
    }
]

// shortcut to shuffling array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.getElementById('grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
// console.log(gridDisplay)

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'tile')
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        // console.log(card, i);
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        // alert('You found a match!')
        displayModal(cardArray[optionOneId].message, cardArray[optionOneId].img);
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        // alert("sorry try again")
    }

    result.textContent = cardsWon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        result.innerHTML = "Congratulations ! You found them all"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function resetCode() {
    console.log("Hello")
    const cards = document.querySelectorAll('img')
    for (let i = 0; i < cardArray.length; i++) {
        cards[i].setAttribute('src', 'images/blank.png')
        cards[i].addEventListener('click', flipCard)
    }
    cardArray.sort(() => 0.5 - Math.random())
    result.innerHTML = 0
    console.log(cardArray)
}

function displayModal(message, imageUrl) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Modal Image';

    const messageText = document.createElement('p');
    messageText.textContent = message;

    modalContent.appendChild(closeButton);
    modalContent.appendChild(image);
    modalContent.appendChild(messageText);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);
    modal.style.display = 'block';
}