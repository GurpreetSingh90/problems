// 1289. Minimum Falling Path Sum II
// Hard
// Topics
// Companies
// Hint
// Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts.

// A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column.

 

// Example 1:


// Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
// Output: 13
// Explanation: 
// The possible falling paths are:
// [1,5,9], [1,5,7], [1,6,7], [1,6,8],
// [2,4,8], [2,4,9], [2,6,7], [2,6,8],
// [3,4,8], [3,4,9], [3,5,7], [3,5,9]
// The falling path with the smallest sum is [1,5,7], so the answer is 13.
// Example 2:

// Input: grid = [[7]]
// Output: 7
 
// let solve = function(row,prev,grid,dp) {

// youtube 1
//     let n = grid.length;
//     if(row >= n){
//         return 0;
//     }
//     if(dp[row][prev] != 1e9){
//         return dp[row][prev];
//     }
//     let ans = 1e9;
//     for (let i = 0; i < n; i++) {
//         if (i != prev) {
//             let next_value = solve(row + 1, i, grid,dp);
//             ans = Math.min(ans,grid[row][i]+next_value)
//         }
//     }
//     return dp[row][prev] = ans;  
// };

// let minFallingPathSum = function(grid) {
//     let n = grid.length;
//     let dp = [];
//     for (let i = 0; i < n; i++) {
//         dp.push(new Array(n+1).fill(1e9));
//     }
//     return solve(0,n,grid,dp);
    
// };

// youtube 2
//  let minFallingPathSum = function(grid) {
//     let n=grid.length;
//     let dp = [];
//     for (let i = 0; i < n; i++) {
//         if(i ==0){
//             dp[0][i] = grid[0][i];
//         }
//         else{
//             dp.push(new Array(n).fill(1e9));
//         }  
//     }

//     for (let i = 1; i < n;i++){
//         for (let prev = 0; prev < n;prev++){
//             for(let j=0;j<n;j++){
//                 if(prev == j) continue;
//                 //dp[i][j] = Math.min(dp[i][j],)
//                 dp[i][j] = Math.min(dp[i][j], grid[i][j]+dp[i-1][prev])
//             }
//         }
//     }
//     let ans = Math.min(...dp[n-1])
//     return ans;
//     // return solve(0,n,grid,dp);

// };


//Gurpreet Version
let minFallingPathSum = function (grid) {
    let n = grid.length;
    for (let i = 0; i < n - 1; i++) {
        let result = new Array(n).fill(1e9);
        let curr_row = grid[i]
        let next_row = grid[i + 1]
        for (let j = 0; j < n; j++) {
            for (let curr = 0; curr < n; curr++) {
                if (j == curr) continue;
                result[curr] = Math.min(result[curr], next_row[curr] + curr_row[j]);
            }
        }
        grid[i + 1] = result;
    }
    let ans = Math.min(...grid[n - 1])
    return ans;
};

console.log(minFallingPathSum([[1,2,3],[4,5,6],[7,8,9]]));




