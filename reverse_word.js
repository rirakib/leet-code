var reverseWords = function(s) {
    let arr = s.split(' ');
   
    let start = 0;
    let end = arr.length - 1

    while(start < end){

        if(arr[start] != '' && arr[end] != ''){
            console.log('hello')
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }else{
        
            if(arr[start] == '' && arr[end] == ''){
                start++
                end--
            }else{
                if(arr[start] == ''){
                    start++
                }else{
                    end--
                }
            }
        }
        
        
    }

    

    let res = arr.filter((item) => item != '')
    let str = ''
    for(let i=0;i<res.length;i++){
        if(i == 0){
            str += res[i]
        }else{
            str += ' ' + res[i]
        }
        
    }
   return str;


   
    return arr;
};

console.log(reverseWords('  hello world '))