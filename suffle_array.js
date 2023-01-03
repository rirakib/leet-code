var shuffle = function(nums, n) {

    let x = 0;
    let y = n ;
    let arr = []
    while(x != n){
        arr.push(nums[x],nums[y])
        x++
        y++
    }
    return arr;
};

console.log(shuffle([1,2,3,4,5,6],3))