const palindromes = function (rawWord) {
    word = rawWord.replace(/[\p{P}\s]/gu,"").toLowerCase();
    const halfWay = Math.floor(word.length/2);
    for(i = 0; i < halfWay; i++) {
        if(word[i] !== word[word.length-1-i]) {return false}
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
