// reset js
'use strict';

console.log("ciao mondo")
  
// chiedo all'user di scrivere le parole tramite prompt 
let parola1 = prompt("Scrivi la prima parola :");
let parola2 = prompt("Scrivi la seconda parola :");

// creo una variabile per il risultato
 let parolaCorta, parolaLunga 

 if(parola1.length < parola2.length){
    parolaCorta = parola1;
    parolaLunga = parola2;
 }else{
    parolaCorta = parola2;
    parolaLunga = parola1;
 }

//  stampa la parola più corta seguita dalla parola più lunga 
console.log("la parola più corta è :" +parolaCorta);
console.log("la parola più lunga è :" +parolaLunga);