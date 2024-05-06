// reset js
'use strict';

console.log("ciao mondo");

// creo un array contentente almeno 10 numeri 

const numbers = [4120,2547,7452,852,25,7452,8541,10,542,25,987,45,60,54,252];


let somma = 0 ;

// ciclo sugli elementi di numbers e li sommo 
for (let i = 0; i < 10 ; i++) {
    
    somma = somma + numbers[i];
    
}
// calcolo la media 
let medianumbers = somma / 10;
// stampo la media in console 
console.log('la media è :', medianumbers , 'la somma è', somma);