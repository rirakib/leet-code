var longestCommonPrefix = function(strs) {

    let sortingStr = strs.sort();

    let start = sortingStr[0]
    let end= sortingStr[sortingStr.length-1]

    var result=''

    for(let i=0;i<start.length;i++){
        if(start[i]===end[i]){
            result+=start[i];
        }else{
            break
        }
    }
    return result;

};


console.log(longestCommonPrefix(["dog","racecar","car"]))