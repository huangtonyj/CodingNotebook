// If our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24] . 
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

function getProductExceptItself(array) {
    const product = array.reduce((runningProduct, currentNum) =>  runningProduct * currentNum);
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(product / array[i]);
    }

    return result;
}

console.log(getProductExceptItself([3, 2, 1])); // [2, 3, 6]
console.log(getProductExceptItself([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]