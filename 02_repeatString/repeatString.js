const repeatString = function(str,  n) {
    let res ="";
    if (n < 0)
        return "ERROR";
    while(n!=0){
        res+=str;
        n--;
    } 
    return res
};

// Do not edit below this line
module.exports = repeatString;
