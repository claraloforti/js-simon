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
const listaRandom = document.getElementById("numbers-list");
const numeriListaRandom = getArrayNumber(1, 50, 5);
listaRandom.innerText = numeriListaRandom.join(", ");

// Seleziono gli elementi del countdown
let seconds = 10;
let timer;
const timeInPage = document.getElementById("countdown");
const instructions = document.getElementById("instructions");
// Seleziono il form
const form = document.getElementById("answers-form");

// Timer di 10 secondi per poter memorizzare i numeri
timer = setInterval(() => {
    timeInPage.innerText = --seconds;

    // Appena il countdown arriva a 0 nascondo gli elementi che ho in pagina e mostro il form
    if (seconds === 0) {
        clearInterval(timer);
        timeInPage.classList.add("d-none");
        instructions.classList.add("d-none");
        listaRandom.classList.add("d-none");
        form.classList.remove("d-none");
    }
}, 100);

// Creo un evento che al submit mi dice quanti numeri ha indovinato l'utente
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let guessNumArray = [];
    let allUserNum = document.querySelectorAll("#input-group input");
    let messaggio = document.getElementById("message");


    for (let i = 0; i < allUserNum.length; i++) {
        let numUser = parseInt(allUserNum[i].value);

        // Se il numUser è uguale a numRandom allora mi aggiunge non il valore ma un numero al

        if (numeriListaRandom.includes(numUser) && !guessNumArray.includes(numUser)) {
            guessNumArray.push(numUser);
        }
    }

    messaggio.innerText = "Hai indovinato " + guessNumArray.length + " numeri!";
});