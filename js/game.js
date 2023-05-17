const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player')
const people = [
    'benhur',
    'callegas',
    'faissel',
    'jose',
    'matheus'
]
const timer = document.querySelector('.time')

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === (people.length *2)){
        clearInterval(this.loop)
        alert(`Parabens, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} s`)
        
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter === secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')
        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {

        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500)

    }
}

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return
    }
    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

}

const createCard = (people) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../memoryeprevs/${people}.jpg')`

    card.appendChild(front)
    card.appendChild(back);
    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', people)
    return card
}

const loadGame = () => {

    const duplicatePeople = [...people, ...people]

    const shuffledArray = duplicatePeople.sort(() => Math.random() - 0.5);


    shuffledArray.forEach((ind) => {
        const card = createCard(ind)
        grid.appendChild(card)
    })
}

const startTimer = ()=>{
    this.loop = setInterval(() => {
        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer +1
    } , 1000)
}
window.onload = () => {
    
    const playerName = localStorage.getItem('player');
    spanPlayer.innerHTML = playerName
    startTimer()
    loadGame()
}

