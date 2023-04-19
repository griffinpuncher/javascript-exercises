const add = function(...numberToAdd) {
	return numberToAdd[0] + numberToAdd[1];
};

const subtract = function(...numberToSubtract) {
  return numberToSubtract[0] - numberToSubtract[1];
};

const sum = function(...numbersToSum) {
  let sum = 0;
  numbersToSum.flat().forEach(function(number) {sum += number;});
	return sum;
};

const multiply = function(...numbersToMultiply) {
  let answer = 1;
  numbersToMultiply.flat().forEach(number => {answer *= number});
  return answer;
};

const power = function(...numbersToPower) {
	return numbersToPower[0]**numbersToPower[1];
};

const factorial = function(factorial) {
  let answer = 1;
  if (factorial === 0) {return answer;};
	for (let i = 1; i <= factorial; i++) {
    answer = answer*i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
