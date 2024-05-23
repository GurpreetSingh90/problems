
let longSeq = function(arr,index,prevIndex,dp){
    if(arr.length == index){
        return 0;
    }
    if(dp && dp[index] && dp[index][prevIndex]){
        return dp[index][prevIndex];
    }

    let f1 = 0+longSeq(arr,index+1,prevIndex,dp);
    let f2 = 0;
    if(prevIndex == -1 || arr[index] > arr[prevIndex]){
        f2 = 1+longSeq(arr,index+1,index,dp);
    }
    let res =  Math.max(f1,f2);
    if(prevIndex > -1){
        dp[index][prevIndex] = res;
    }
    return res;
}
let seq = [10,2,9,5,7,3,60,80,1];
let dp = new Array(seq.length).fill(0).map(() => new Array(seq.length).fill(0));
//console.log(longSeq(seq,0,-1,dp));


//More Optimized
let longSeq1 = function(arr){
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        let res = longS(arr,index); 
        max = Math.max(max,res,[]);
    }
    return max
}

let longS = function(arr,i,dp){
    let max = 0;
    if(dp[i]){
        return dp[i];
    }
    for (let index = 0; index < i; index++) {
        if(arr[i] > arr[index]){
            let res = longS(arr,index,dp);
            max =Math.max(max,res); 
        }
    }
    dp[i] = max;
    return 1+max;

}

//Tabulation
let long2 = function(arr,dp){
    dp[0] = 1;
    for (let i = 1; i < arr.length; i++){
        let max = 0
        for (let j = 0; j < i; j++) {
            if(arr[j] < arr[i]){
                max = Math.max(max,dp[j]);
            }
        }
        dp[i] = 1+max; 
    }
    return Math.max(...dp);
}


console.log(long2(seq,[]));


