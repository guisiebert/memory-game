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

// Mal explicado mas diz ser um jeito de randomicamente organizar as cartas (em 29:50)
cardArray.sort(() => 0.5-Math.random())


const gridDisplay = document.querySelector('#grid')

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

function flipCard() {
    const cardID = this.getAttribute("data-id")
    console.log("clicked", cardID)
}

//43min