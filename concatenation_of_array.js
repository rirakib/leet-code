var getConcatenation = function(nums) {
    let ans = nums;
    nums.map((item)=> {
        ans.push(item)
    })
    return ans;
};