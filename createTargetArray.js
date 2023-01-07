
var createTargetArray = function(nums, idxArr) {
    let target = [], max = -1
    for(let i = 0; i < idxArr.length; i++){
        if(idxArr[i] <= max){
            for(let j = 0; j < i; j++){
                if(idxArr[i] <= idxArr[j])idxArr[j]++
                if(idxArr[j] > max)max = idxArr[j]
            }            
        }
        max = Math.max(max, idxArr[i])
    }
    for(const i in nums)target[idxArr[i]] = nums[i]
    return target
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1]))