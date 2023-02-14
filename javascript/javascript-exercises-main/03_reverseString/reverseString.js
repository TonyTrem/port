// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// 

const reverseString = function(str) {
    // Using recursion
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
    
    
    // Using a for loop
    // let newString = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newString += str[i];
    // }
    // return newString;
    
    
    // Using split()

    // let splitString = str.split("");
    // let reverseArray = splitString.reverse();
    // let joinArray = reverseArray.join("");
    // return joinArray;
    
    // Chaining the split
    // return str.split("").reverse().join("");
}


// Do not edit below this line
module.exports = reverseString;
