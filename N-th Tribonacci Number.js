//1137. N-th Tribonacci Number
// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

 

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:

// Input: n = 25
// Output: 1389537

// let tribonacci = function (n) {
//     let tribo = [0,0,1],sum=0;
//     for (let i = 0; i < n - 1; i++) {
//         sum = tribo.reduce(((acc,cur)=>{ return acc+cur}))
//         tribo.shift();
//         tribo.push(sum);
//     }
//     return sum;
    
// };

let tribonacci = function (n) {
    if(n < 2) return n;
    if(n == 2) return 1;
    let t = 0;
    let t1 = 0;
    let t2 = 1;
    let t3 = 1;
    for (let i = 3; i < n+1 ; i++) {
        t = t1 + t2 + t3;
        t1 = t2;
        t2 = t3;
        t3 = t;
    }
    return t; 
};



console.log(tribonacci(0));

