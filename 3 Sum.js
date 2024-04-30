
// var threeSum = function(nums, target) {
//     nums = nums.sort();
//     let output = [];
//     let obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         obj[nums[i]]= i;
//         for (let j = i+1; j < nums.length; j++) {
//             let diff  = target-nums[i]-nums[j];
//             let index = obj[diff]
//             if(index != undefined && i != obj[diff] && j != obj[diff]){
//                 output.push([diff,nums[i],nums[j]])
//             }
//         }
//     }
//     return output;
// };


// Two Pointer
let threeSum = function (nums, target) {
    nums = nums.sort()
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] != 0 || nums[i] != nums[i - 1]) {
            let j = i + 1;
            let k = n
            let tar = target - nums[i];
            while (j < k) {
                if (tar == nums[j] + nums[k]) {
                    j++;
                    k--;
                    while (j < k && nums[j] == nums[j + 1]) j++;
                    while (j < k && nums[k] == nums[k - 1]) k--;
                    console.log(nums[i] + " " + nums[j] + " " + nums[k]);
                } else if (nums[j] + nums[k] < tar) {
                    j++;
                } else {
                    k--;
                }

            }

        }
    }

};
threeSum([7, -6, 3, 8, -1, 8, -11], 0);
