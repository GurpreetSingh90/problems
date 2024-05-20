//TOP DOWN APPROCH


let fibonacci1 = function(n,dp){
    if(n == 0 || n == 1){
        return n;
    }
    if(dp[n] != 0){
        return dp[n];
    }

    let fb = fibonacci1(n-2,dp)+fibonacci1(n-1,dp);
    dp[n]= fb;
    
    return fb;
}

let dp = [];
let n = 10;
dp = Array.from({length: n+1}, () => 0); 
//console.log(fibonacci1(n));

//BOTTOM UP APPROCH
//ITERATION

let fibonacci = function(n){
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2;i < n+1;i++){
        dp[i] = dp[i-2]+dp[i-1];
    }
    return dp[n];
}

console.log(fibonacci(10));


