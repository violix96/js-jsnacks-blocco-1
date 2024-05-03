// reset js
'use strict';

console.log("ciao mondo");

// creo un array vuoto 
const even = []
// numero massimo di richiesto utente 
const requestUser = 6
// ciclo per il numero di richieste user 
for (let i = 0 ; i < requestUser ; i++){
    const input = prompt("Inserisci un numero:");
// verifico se l'input è un numero 
    if(isNaN(input)){
        alert("Non hai inserito un numero");
    }else{
        const numero = Number(input);
        if(numero % 2 !== 0){
            even.push(numero);
           
        }
    }

}
// stampa in console dei numeri dispari negli array 
console.log(even);
