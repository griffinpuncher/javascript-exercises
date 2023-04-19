const repeatString = function(string, num) {
    let newString = "";
    for (var i = 0; i < num; i++) {
        newString = newString + string;
    }

    if (num < 0) {
        return "ERROR";
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
