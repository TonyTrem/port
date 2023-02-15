const removeFromArray = function() {
    const myArray = arguments[0];
    for (let i = 1; i < arguments.length; i++) {  
        const item = arguments[i];
        if (myArray.includes(item)) {
            const index = myArray.indexOf(item);
            myArray.splice(index, 1);  
        }     
               
    }    
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
