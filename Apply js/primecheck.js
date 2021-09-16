
function isPrime(n) {
        for(i = 2; i <n; i++){
        //console.log(i, n % i); 
            if( n % i ==0){
                return "not a prime number"
               
            }
        }
        return "your number is prime number"
}

var result = isPrime(128)
console.log(result);


