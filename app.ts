function add(n1:number,n2:number):number{
    return n1+n2;
}
// void sta che può ritornare qualsiasi tipo, una funzione non può essere undefined
function printResult(num:number):void{
    console.log('Result: '+num)
}


printResult(add(5,12));
// accetto qualsiasi funzione che ha come paramentri di inserimento due numeri
let combineValues:(a:number,b:number)=>number;
combineValues=add;
// combineValues=printResult;
// combineValues=5;
console.log(combineValues(8,8))