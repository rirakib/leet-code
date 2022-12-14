var search = (nums,target) => {
    let start = 0;
    let end = nums.length;

    while(start <= end ){
        
        let mid = Math.floor((start + end) / 2)
        
        if(nums[mid] === target) return mid;
        if(nums[mid] < target){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }

    return -1;
}

console.log(search([-1,0,3,5,9,12],9));