var searchFirst = function(nums,target) {
    

    let left = 0;
    let right = nums.length;
    let first = -1;
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if(nums[mid] == target){
            first = mid;
            right = mid - 1;
        }
        else if(nums[mid] > target) {
            right = mid - 1
        }   
        else{
            left = mid+1;
        }
    }
    console.log("First: " + first)
    return first;

    
};


var searchFirst = function(nums,target) {
    

    let left = 0;
    let right = nums.length;
    let first = -1;
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if(nums[mid] == target){
            first = mid;
            right = mid - 1;
        }
        else if(nums[mid] > target) {
            right = mid - 1
        }   
        else{
            left = mid+1;
        }
    }
    console.log("First: " + first)
    return first;

    
};

searchFirst([1,1,2,3,5,5,5,5,5,5,7,7,7,7,7,8,8],8)