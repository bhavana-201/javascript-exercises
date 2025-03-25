const add = function(n1, n2) {
  const sum = n1 + n2;
  return sum;
	
};

const subtract = function(n1 , n2) {
  let sub = 0;
  if(n1 < 0 && n2 < 0){
    const a = Math.abs(n1);
    const b = Math.abs(n2);
    sub = -(a - b);
    return sub;
  }
  else{
    sub = n1 - n2;
    return sub;
  }
	
};

const sum = function(arr){
  let sum = 0;
  for(const ele of arr) 
    sum += ele;
	return sum;
};

const multiply = function(arr) {
  let pro = 1;
  for(const ele of arr)
    pro *=ele;
  return pro;

};

const power = function(n1, n2) {
  return Math.pow(n1,n2);
};

const factorial = function(n) {
  
  if (n === 0)
    return 1;
  
  return n*factorial(n-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
