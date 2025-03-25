const sumAll = function(n1, n2) {
    const s = Math.min(n1,n2);// s = 2
    const e = Math.max(n1,n2);// e = 4
    let sum = 0;
    if( n1 < 0 || n2 < 0 || Number.isInteger(n1) == false || Number.isInteger(n2) == false)
        return "ERROR";
    
    for(let i = s; i <= e; i++){//i = 2 <= 4 2, 3, 4
            sum += i;//2+3+4
        }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
