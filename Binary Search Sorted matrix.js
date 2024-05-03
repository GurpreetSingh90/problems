// var findTarget = function(nums,target) {
//     let cols = nums[0].length;
   
//     let i = 0;
//     let j = cols-1;
   
//     while (i < nums.length  && j >= 0){
//         if(nums[i][j] === target){
//             return true;
//         }
//         else if(target > nums[i][j] ) {
//           i++;
//         }
//         else if(target < nums[i][j] ) {
//            j--;
//         }
//     }
//     return false;
// }






let test = { 
    //param A : array of array of integers
    //param B : integer
    //return an integer
       searchMatrix : function(A, B){
           let i = 0;
           let j = A[0].length -1;
           while(i < A.length && j >= 0){
               if(B == A[i][j]){
                   return j;
               }
               else if(B > A[i][j]){
                   i++;
               }
               else{
                  j--;
               }
   
           }
           return -1;
       }
   };

console.log(test.searchMatrix([
    [1]
], 1))
