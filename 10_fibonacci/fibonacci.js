const fibonacci = function(n) {
    if (n<0)
        return "OOPS";
    let a = 0, b = 1, i = 2;
    let arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    
    while(i<=n){
        sum = a + b;//1,2,3
        arr[i++] = sum;//01123
        a = b;//a = 1
        b = sum;//b = 2
    }
    return arr[n];

};
//for (let i = 2; i <= count; i++) {
    //    fib[i] = fib[i - 1] + fib[i - 2];
    // }
    // return fib[count];

// Do not edit below this line
module.exports = fibonacci;
