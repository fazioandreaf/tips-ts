"use strict";
var userInput;
userInput = 5;
userInput = 'max';
var userName;
// userName=userInput;
// si può usare come check
if (typeof userInput === 'string') {
    userName = userInput;
}
// questa funzione non fa continuare il codice, non ritorna nulla mai
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
// generateError('An error',500);
console.log('ciao');
