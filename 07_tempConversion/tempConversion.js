const convertToCelsius = function(fah) {
    //formula
    let f = (fah-32)*(5/9);
    if(Number.isInteger(f) == false)
      return parseFloat(f.toFixed(1));    
    return f;

};

const convertToFahrenheit = function(cel) {
  //formula
  let c = (cel*(9/5))+32;
  if(Number.isInteger(c) == false)
    return parseFloat(c.toFixed(1));    
  return c;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
