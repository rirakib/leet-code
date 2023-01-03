var mostWordsFound = function(sentences) {

    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].split(' ').length
        if(max <sentence){
            max = sentence
        }
    }
    return max;
};

mostWordsFound(
    ["alice and bob love leetcode","i think so too","this is great thanks very much"]
    )