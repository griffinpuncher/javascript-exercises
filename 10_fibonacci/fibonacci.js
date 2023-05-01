const fibonacci = function(input) {
    const number = parseInt(input);
    let answer = 1;
    let lastAnswer = 0;
    if (number < 0) {return "OOPS"};
    for (i = 0; i < number-1; i++) {
        answer += lastAnswer;
        lastAnswer = answer - lastAnswer;
    }
    return answer;
    
};

// Do not edit below this line
module.exports = fibonacci;
