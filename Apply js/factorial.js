// factorial number je man hobe sheta one theka suru hoye sha man porjonto hobe
//example with 5 and 10
/*
5! = 1 2 3 4 5
10! = 1,2,3,4,5,6,7,8,9,10
*/
// factorial primary exaple with 7
/*
for(var i = 1; i<= 7; i++){
    console.log(i);
} 
*/

// 1-10 ar factorial math
/* 10! = 1*2*3*4*5*6*7*8*9*10
var factorial = 1
for(var i = 1; i<=10; i++ ){
    factorial = factorial* i; // factorial takhle * ar por abar jokhon loop hobe tokhon factorial ar man okhanei takhbe ar man bare jabe
    console.log(i, factorial);

} */

// factorial using faction
function factorial(n){
    var factorial = 1;
    for(var i = 1; i<=n; i++ ){
        factorial = factorial * i; // factorial takhle * ar por abar jokhon loop hobe tokhon factorial ar man okhanei takhbe ar man bare jabe
        //console.log(i, factorial);
    }

    return factorial;

}

var result = factorial(5);
console.log(result);