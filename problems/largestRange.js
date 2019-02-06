
// https://www.algoexpert.io/questions/Largest%20Range
// Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of numbers contained in that array. 
// The first number in the output array should be the first number in the range while the second number should be the last number in the range. 
// A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. 
// For instance, the output array [2, 6] represents the range {2, 3, 4, 5, 6}, which is a range of length 5. 
// Note that numbers do not need to be ordered or adjacent in the array in order to form a range. 
// Assume that there will only be one largest range.
// Sample input: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
// Sample output: [0, 7]

function largestRange(arr) {



}


console.log(largestRange([4, 2, 1, 3]), [1, 4]);
console.log(largestRange([4, 2, 1, 3, 6]), [1, 4]);
console.log(largestRange([8, 4, 2, 10, 3, 6, 7, 9, 1]), [6, 10]);
console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]), [0, 7]);
console.log(largestRange([19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]), [10, 19]);
console.log(largestRange([0, 9, 19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]), [-1, 19]);
console.log(largestRange([0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2]), [-7, 7]);
console.log(largestRange([0, -5, 9, 19, -1, 18, 17, 2, -4, -3, 10, 3, 12, 5, 16, 4, 11, 7, -6, -7, 6, 15, 12, 12, 2, 1, 6, 13, 14, -2]), [-7, 7]);
console.log(largestRange([-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2]), [-8, 19]);