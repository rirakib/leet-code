var twoSum = function(numbers, target) {
    let start = 0
    let end = numbers.length - 1

    while(start <= end){

    let sum = numbers[start] + numbers[end]

    if(sum === target) return [start+1,end+1]
    if(sum >= target){

        if(sum >= numbers[end]){
            end--
        }else{
            start++
        }
    }else{
        start++
        end--
    }
        
    }
};

console.log(twoSum([-3,3,4,90],0))