var userInput;
userInput = 5;
userInput = 'max';
var userName;
// userName=userInput;
// si può usare come check
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('An error', 500);
console.log('ciao');
