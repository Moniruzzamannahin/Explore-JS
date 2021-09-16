/*
var i = 1;
var factorial = 1;
while(i<=10){
    factorial = factorial*i
   // console.log(i, factorial); loop bar bar dekhale avabe korte hobe 
    i++;
}
// lopp na dekhai shudhu factorial ar man dekhate hole lopp ar bahire console korte hobe
console.log(factorial);
*/

//factorial with function

function factorial(n){
    var i = 1;
    var fact = 1;
    while(i <= n){
        fact = fact * i;
        i++;
    

}
    return factorial
}
var result = factorial(5);
console.log(result);
