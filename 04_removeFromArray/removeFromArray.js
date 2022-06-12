const removeFromArray = function(array,...numbers) {
    let result = array.filter(arr => !numbers.includes(arr));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
