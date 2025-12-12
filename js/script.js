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

const lista = document.getElementById("numbers-list");
lista.innerText = getArrayNumber(1, 50, 5).join(", ");;
