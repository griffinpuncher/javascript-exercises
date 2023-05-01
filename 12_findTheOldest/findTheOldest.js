const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (person.yearOfDeath == undefined) {
            person.age = (new Date()).getFullYear() - person.yearOfBirth;
        }
        else{
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        if(!oldest) {
            return person;
        }
        else {            
            if (person.age > oldest.age) {
                return person;
            }
            else {
                return oldest;
            }
        }
    },null)
};

// Do not edit below this line
module.exports = findTheOldest;
