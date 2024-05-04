var searchFirst = function(nums,selected,ans) {
    if(ans.length == nums.length){
        console.log(ans);
    }
    for (var i = 0; i < nums.length; i++){
        if(!selected[i]){
            selected[i] = true;
            ans.push(nums[i]);
            searchFirst(nums,selected,ans);
            ans.pop();
            selected[i] = false;
        }
    }

};


searchFirst([1,2,3,4],{},[])