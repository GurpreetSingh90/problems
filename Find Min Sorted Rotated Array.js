
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
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        console.log(nums[mid],target)
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
    let result =   binarySearch(0,minIndex, target,nums); 
    if(result == -1) {
        result = binarySearch(minIndex,(nums.length-1), target,nums);
    }
    return result;
}


//findMin([7,8,9,10,11,12,14,16,19,1,3,4,5,6])


findTarget([ 192, 194, 197, 198, 199, 200, 201, 203, 204, 2, 3, 4, 7, 9, 10, 11, 14, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 39, 40, 42, 43, 46, 47, 50, 51, 52, 53, 55, 57, 59, 60, 64, 66, 68, 70, 71, 72, 75, 76, 78, 85, 86, 87, 91, 92, 94, 95, 96, 99, 102, 105, 106, 107, 109, 111, 113, 114, 115, 119, 120, 121, 123, 125, 129, 130, 131, 133, 134, 137, 138, 139, 140, 141, 142, 143, 145, 146, 149, 151, 152, 156, 160, 161, 165, 167, 168, 170, 171, 176, 177, 178, 179, 180, 181, 182, 185, 186, 190 ],70)