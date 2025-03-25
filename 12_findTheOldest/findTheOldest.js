const findTheOldest = function(people) {

    let max = 0, id = 0, i = 0;
    for( i = 0; i < people.length; i++){
        people[i].yearOfDeath ??= new Date().getFullYear();
        let res = people[i]['yearOfDeath'] - people[i]['yearOfBirth'];
        if (res > max)
        {   
            id = i;
            max = res;
        }
    }
    return  people[id];
};

// Do not edit below this line
module.exports = findTheOldest;
