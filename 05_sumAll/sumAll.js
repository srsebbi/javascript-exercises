const sumAll = function(a, b) {
    let result = 0;
    let start = 0;
    let end = 0
    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }else if (a > b) {
        start = b;
        end = a
    } else {
        start = a;
        end = b;
    }
    for(let i = start; i <= end; i ++) {
        result += i;
        // console.log(result);
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
