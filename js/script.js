// ESERCIZIO SIMON SAYS

// Funzione per creare un array con dei numeri random univoci
function getArrayNumber(min, max, tot) {

    // Creo un'array che conterrà i numeri random
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

// Seleziono l'elemento dove mostro i numeri random
const listaRandom = document.getElementById("numbers-list");
// Genero 5 numeri random da 1 a 50
const numeriListaRandom = getArrayNumber(1, 50, 5);
// Mostro i numeri random in pagina separati da virgole
listaRandom.innerText = numeriListaRandom.join(", ");

// Variabili per il timer
let seconds = 10;
let timer;
// Seleziono l'elemento per mostrare il countdown
const timeInPage = document.getElementById("countdown");
// Seleziono testo istruzioni
const instructions = document.getElementById("instructions");
// Seleziono il form
const form = document.getElementById("answers-form");

// Timer di 10 secondi che toglie un numero di secondi ogni secondo
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
}, 1000);

// Evento submit che verifica quanti numeri ha indovinato l'utente
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let guessNumArray = []; // Array dei numeri indovinati
    let allUserNum = document.querySelectorAll("#input-group input"); // Seleziona tutti gli <input> che sono dentro l'elemento con id "input-group", quindi è la lista di tutti i numeri che scrive l'utente 
    let messaggio = document.getElementById("message");

    // Ciclo che scorre gli input dell'utente
    for (let i = 0; i < allUserNum.length; i++) {
        let numUser = parseInt(allUserNum[i].value); // Converto ogni singolo input in numero

        // Se il numero utente è presente tra i numeri random e se quello indovinato non è già stato scritto dall'utente 
        if (numeriListaRandom.includes(numUser) && !guessNumArray.includes(numUser)) {
            guessNumArray.push(numUser); // Aggiungi il numero all'array dei numeri indovinati
        }
    }

    messaggio.innerText = "Hai indovinato " + guessNumArray.length + " numeri!";
});