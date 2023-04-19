const removeFromArray = function(array, ...removeFromArray) {
    
    for (var i = 0; i < removeFromArray.length; i++) {
        if (array.indexOf(removeFromArray[i]) !== -1) {
            let indexToRemove = array.indexOf(removeFromArray[i]);
            array.splice(indexToRemove,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
