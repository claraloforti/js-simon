// ESERCIZIO SIMON SAYS

// Funzione per creare un array con dei numeri random univoci
function getArrayNumber(min, max, tot) {

    let arrayNumber = [];

    // Finchè la lunghezza di arrayNumber è minore di 5, continua a generare numeri random
    while (arrayNumber.length < tot) {
        const numRandom = getNumRandom(min, max);

        // Se in arrayNumber non è ancora stato incluso un numRandom, allora stampalo. Così non mi stampa mai due numeri uguali
        if (!arrayNumber.includes(numRandom)) {
            arrayNumber.push(numRandom);
        }
    }
    return arrayNumber;
}

// Funzione per creare numeri random
function getNumRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Mostro l'array dei numeri random in pagina
const lista = document.getElementById("numbers-list");
lista.innerText = getArrayNumber(1, 50, 5).join(", ");

// Seleziono gli elementi del countdown
let seconds = 10;
let timer;
const endTime = 0;
const timeInPage = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
const numbersList = document.getElementById("numbers-list");
// Seleziono il form
const answersForm = document.getElementById("answers-form");

// Timer di 10 secondi per poter memorizzare i numeri
timer = setInterval(() => {
    timeInPage.innerText = --seconds;

    // Appena il countdown arriva a 0 nascondo gli elementi che ho in pagina e mostro il form
    if (seconds === endTime) {
        clearInterval(timer);
        timeInPage.classList.add("d-none");
        instructions.classList.add("d-none");
        numbersList.classList.add("d-none");
        answersForm.classList.remove("d-none");
    }
}, 100);