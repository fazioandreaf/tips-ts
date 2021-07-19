let userInput:unknown;
userInput=5;
userInput='max';
let userName:string;
// userName=userInput;
// si può usare come check
if(typeof userInput==='string'){
    userName=userInput
}
// questa funzione non fa continuare il codice, non ritorna nulla mai
function generateError(message:string,code:number) {
    throw {
        message:message,
        errorCode:code
    };
}
generateError('An error',500);
console.log('ciao')
