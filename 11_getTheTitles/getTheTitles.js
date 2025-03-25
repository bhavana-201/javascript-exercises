const getTheTitles = function(books) {
    let arr = [];
   for(var i = 0; i < books.length; ++i)
        arr.push(books[i]['title']);
    return arr;

};

// Do not edit below this line
module.exports = getTheTitles;
