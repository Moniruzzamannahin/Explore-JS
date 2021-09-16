
//0,1 positon hoye gesa ar por suru hobe 3 tomo posotion //3 = 0,1,2 // 2 hobe 3 ar positon
// 3 numer position mane index 2
// joto number poth bole tar theka 1 komabo abar 2 komabo
//ex: 10 = 1 komale 9 hobe ar 2 komale hobe 8 
// n tomo pod  = n-1 1 tomo poth, ar n-2 for 2 tomo poth
//fibo[2] = fibo[2-1] + fibo[2-2];
//fibo[4] = fibo[4-1] + fibo[4-2];
//fibo[6] = fibo[6-1] + fibo[6-2];
//fibo[n] = fibo[n-1] + fibo[n-2];


fibo = [0, 1] 
for(i = 2; i<=10; i++){
    fibo[i] = fibo[i-1] + fibo [i-2]

    console.log(fibo[i],fibo[i-1],fibo[i-2]);

}

console.log(fibo);

// with function

function fibonacci(n) {
    var fibo = [0, 1] ;
    for( var i = 2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo [i-2];   
    }
    return fibo  
}

var result = fibonacci(12);
console.log(result); 