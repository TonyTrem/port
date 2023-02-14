const repeatString = function(repeatThis, howManyTimes) {
    if (howManyTimes >= 0) {
        let repeated = "";
        for (i = 0; i < howManyTimes; i++) {
            repeated += repeatThis;
        }
        return repeated;
    } else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
