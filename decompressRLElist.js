var decompressRLElist = function(nums) {
    
    let newArr = []

    for (let i = 1; i < nums.length; i = i + 2) {
    let numOfTimes = nums[i - 1];
        for (j = 1; j <= numOfTimes; j++) {
            newArr.push(nums[i]);
        }
    }
    return newArr;
};

console.log(decompressRLElist([1,2,2,3]))