var isPalindrome = function(s) {
    let str = s.replace(/[^\d]/g, '').toLowerCase();

    let start = 0;
    let end = str.length - 1;
    
    while(start < end){

        if(str[start] != str[end]){
            return false;
            
        }

        start++
        end--
    }

    return true;

}
console.log('h')
console.log(isPalindrome("a_d a"))