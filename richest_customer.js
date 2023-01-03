var maximumWealth = function(accounts) {
    
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let subarr = accounts[i]
        let sum = 0;
        for (let j = 0; j < subarr.length; j++) {
            sum+= subarr[j]
            
        }
        
        if(max < sum){
            max = sum
        }
    }

    return max
};

maximumWealth([[2,8,7],[7,1,3],[1,9,5]])