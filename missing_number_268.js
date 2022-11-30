var missingNumber = function(nums) {
    let n = nums.length
    console.log(nums)
    let missing = nums[0]
    for(let i=0;i<nums.length + 1;i++){
        if(nums.indexOf(i) < 0){
            return i;
        }
    }
    

};

console.log(missingNumber([3,0,1]))