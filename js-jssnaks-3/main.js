// reset js
'use strict';

console.log("ciao mondo")

let somma = 0;

// ciclo for che chiede all'utente di inserire un numero per  10 volte
for (let i = 0; i < 10; i++) {
    // richiesta all'utente di inserire un numero e converti l'input in un numero intero con il type of number
    const numero = Number(prompt("Inserisci un numero:"));
    
    // aggiungereil numero inserito alla somma totale
    somma += numero;
}

// stampa del totale di tutti i numeri inseriti
console.log("Il totale è:", somma);
