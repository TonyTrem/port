const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) {
        return "ERROR";
    }

    const lowerBound = Math.min(start, end);
    const upperBound = Math.max(start, end);
    let sum = 0;

    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }

    return sum;
};

    // if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    //     if (arguments[0] > 0 && arguments[1] > 0) {
        
    //         let max = arguments[1];
    //         let min = arguments[0];
    //         if (arguments[0] > arguments[1]) {
    //             max = arguments[0];
    //             min = arguments[1];
    //         } 
    //         return (min + max) * (max - min + 1) / 2;

    //     } else {
    //         return "ERROR"
    //     }
    // } else {
    //     return "ERROR"
    // }
    
// };

// Do not edit below this line
module.exports = sumAll;
