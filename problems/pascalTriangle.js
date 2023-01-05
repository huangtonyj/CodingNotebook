/*
  Pascal's triangle is a triangular array of integers constructed with the following formula:

  The first row consists of the number 1.
  For each subsequent row, each element is the sum of the numbers directly above it, on either side.
  For example, here are the first few rows:

      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
  Given an input k, return the kth row of Pascal's triangle.

  Bonus: Can you do this using only O(k) space?
*/

function pascalTriangle(k) {
  let currentRow = [1];
  let nextRow = [1];
  let level = k - 1;

  while (level > 0) {
    currentRow.forEach((el, idx, arr) => {
      nextRow.push(el + (arr[idx + 1] || 0));
    })
    
    currentRow = nextRow;
    nextRow = [1];

    level--;
  }

  return currentRow;
}

console.log(pascalTriangle(1));
console.log(pascalTriangle(2));
console.log(pascalTriangle(3));
console.log(pascalTriangle(4));
console.log(pascalTriangle(5));