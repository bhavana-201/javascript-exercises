const palindromes = function (string1) {
    const inc = "abcdefghijklmnopqrstuvwxyz0123456789";
    const str = string1.toLowerCase().split("").filter((character) => inc.includes(character)).join();
    const revstr = str.split("").reverse().join("");
    return str === revstr;

};

// Do not edit below this line
module.exports = palindromes;
