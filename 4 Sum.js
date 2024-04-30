let sample = [-1 , -3 , -2, -2, 5, 1];




let fourSum = function (nums, target) {
    nums = nums.sort(sortNumber);
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let l = n-1; l > 0; l--) {
            let j = i + 1;
            let k = l - 1;
            let tar = target - (nums[i] + nums[l]);
            while (j < k) {
                if (tar == nums[j] + nums[k]) {
                    console.log(nums[i] + " " + nums[j] + " " + nums[k] + " " + nums[l]);
                    j++;
                    k--;
                    //while (j < k && nums[j] == nums[j + 1]) j++;
                    //while (j < k && nums[k] == nums[k - 1]) k--;

                } else if (nums[j] + nums[k] < tar) {
                    j++;
                } else {
                    k--;
                }
            }
        }
    }

};
function sortNumber(a,b){
    return a - b;
 }
fourSum(sample, 2);





