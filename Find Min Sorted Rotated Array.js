
var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;
    while (left < right) {
        let mid = Math.floor((left + right)/2)
        if(nums[mid] > nums[right]) {
            left = mid+1
        }   
        else{
            
            right = mid;
        }
    }
    return right;
    
};

var binarySearch = function(left,right,target,nums) {
    let index = -1;
    while (left < right) {
        let mid = Math.floor((left + right)/2)
        if(nums[mid]== target) {
            index =  mid;
            return index;
        }   
        else if(nums[mid] < target) {
            left = mid+1;
        }
        else{
            right = mid-1;
        }     
    }
    return index;
    
}

var findTarget = function(nums,target) {
    let minIndex = findMin(nums);
    let result = binarySearch(minIndex,(nums.length-1), target,nums);
    if(result == -1) {
        result = binarySearch(0,minIndex, target,nums);
    }
    console.log("Final",result);
}


//findMin([7,8,9,10,11,12,14,16,19,1,3,4,5,6])


findTarget([7,8,9,10,11,12,14,16,19,1,3,4,5,6],19)