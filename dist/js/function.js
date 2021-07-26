"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// void sta che può ritornare qualsiasi tipo, una funzione non può essere undefined
function printResult(num) {
    console.log('Result: ' + num);
}
// il void è poer dire all callback che con quel risultato non deve fare nulla, lo specifico dopo
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// accetto qualsiasi funzione che ha come paramentri di inserimento due numeri
let combineValues;
combineValues = add;
// combineValues=printResult;
// combineValues=5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
