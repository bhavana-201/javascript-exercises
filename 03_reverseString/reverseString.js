const reverseString = function(str) {
    let re ="";
    for(let i = str.length-1; i >=0; i--){
         re+=str[i];
    }
    return re;
    //return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
