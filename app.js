const cardArray = [
    {
        name: "angry",
        img: './images/angry.jpeg',
    },
    {
        name: "happy",
        img: './images/happy.jpeg',
    },
    {
        name: "hurt",
        img: './images/hurt.jpeg',
    },
    {
        name: "sad",
        img: './images/sad.jpeg',
    },
    {
        name: "scared",
        img: './images/scared.jpeg',
    },
    {
        name: "worried",
        img: './images/worried.jpeg',
    },
    {
        name: "angry",
        img: './images/angry.jpeg',
    },
    {
        name: "happy",
        img: './images/happy.jpeg',
    },
    {
        name: "hurt",
        img: './images/hurt.jpeg',
    },
    {
        name: "sad",
        img: './images/sad.jpeg',
    },
    {
        name: "scared",
        img: './images/scared.jpeg',
    },
    {
        name: "worried",
        img: './images/worried.jpeg',
    },
]

/// parei em 59:52

// Mal explicado mas diz ser um jeito de randomicamente organizar as cartas (em 29:50)
cardArray.sort(() => 0.5-Math.random())


const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []

function createBoard() {
    for (i=0; i<cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', "./images/blank.jpeg");
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    // Esse if devia impedir o usuário de clicar no mesmo card duas vezes, mas parece não estar funcionando.
    if (optionOneId == optionTwoId) {
        alert("bobao, você clicou na mesma carta")
        cards[optionOneId].setAttribute('src', './images/blank.jpeg')
        cards[optionTwoId].setAttribute('src', './images/blank.jpeg')
    }


    if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', './images/white.jpeg')
        cards[optionTwoId].setAttribute('src', './images/white.jpeg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        resultDisplay.innerHTML = cardsWon.length + " Aceeeertooou"
        console.log(cardsWon)
    } else {
        cards[optionOneId].setAttribute('src', './images/blank.jpeg')
        cards[optionTwoId].setAttribute('src', './images/blank.jpeg')
        resultDisplay.innerHTML = cardsWon.length + " Erroooou, seu burro"
    }

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerHTML = "You did, little fella"
    }

}

function flipCard() {
    const cardID = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}

//43min
//https://www.youtube.com/watch?v=ec8vSKJuZTk&t=1098s