const findTheOldest = function() {
    let oldest = 0;
    let oldestIndex = 0;
    let currentAge = 0;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yearOfBirth = 0;
    let yearOfDeath = 0;
    let people = arguments[0];
    if (people === undefined) {
        return undefined;
    }
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfBirth === undefined) {
            return undefined;
        }
        if (people[i].yearOfDeath === undefined) {
            yearOfDeath = currentYear;
        } else {
            yearOfDeath = people[i].yearOfDeath;
        }
        yearOfBirth = people[i].yearOfBirth;
        currentAge = yearOfDeath - yearOfBirth;
        if (currentAge > oldest) {
            oldest = currentAge;
            oldestIndex = i;
        }
    }
    return people[oldestIndex];
};
    

// Do not edit below this line
module.exports = findTheOldest;
