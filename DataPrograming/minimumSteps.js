

///Top Down
let minCost = function(arr,n,dp){
    
    if(n == 0){
        return arr[0];
    }
   
    if(n == 1){
        return arr[0]+arr[1];
    }

    if(dp[n] != 0){
        return dp[n];
    }
    
    let a = arr[n]+minCost(arr,n-1,dp);
    let b = arr[n]+minCost(arr,n-2,dp)
    let minC = Math.min(a,b);
    dp[n]= minC;
    
    return minC;
}

let arr = [1,2,4,3,6,5,2,7,1]
//let arr = [1,2,3,4]
let dp = [];
let n = 8;
dp = Array.from({length: n+1}, () => 0); 
//console.log(minCost(arr, n, dp));



//BOTTOM UP

let minCost1 = function(arr,n){
    
    let dp = []
    
    dp[0] = arr[0];
    dp[1] = arr[1]+arr[0];

    for(let i = 2; i <arr.length; i++){
        dp[i] = Math.min(dp[i-1],dp[i-2])+arr[i];
    }
    return dp[n];
}
console.log(minCost1(arr, arr.length-1));