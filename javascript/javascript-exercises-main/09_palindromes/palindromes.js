const palindromes = function (str) {
    // Remove punctuation and make it all lower case
    let checkString = str.replace(/[\p{P}$+<=>^`|~]/gu, '').toLowerCase();

    // Remove all the whitespace
    checkString = checkString.replace(/\s+/g, '');

    // iterate over both halves of the string comparing characters
    for (let i = 0; i < checkString.length / 2; i++)
        if (checkString[i] === checkString[(checkString.length - 1) - i]) {
            continue;
        } else {
            return false;
        }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
