/*
  Seating Arrangements

  There are n guests attending a dinner party, numbered from 1 to n. The ith guest has a height of arr[i-1] inches.
  The guests will sit down at a circular table which has n seats, numbered from 1 to n in clockwise order around the table. 
  As the host, you will choose how to arrange the guests, one per seat. 
  Note that there are n! possible permutations of seat assignments.
  Once the guests have sat down, the awkwardness between a pair of guests sitting in adjacent seats is defined as the absolute difference between their two heights. 
  Note that, because the table is circular, seats 1 and n are considered to be adjacent to one another, and that there are therefore n pairs of adjacent guests.
  The overall awkwardness of the seating arrangement is then defined as the maximum awkwardness of any pair of adjacent guests. Determine the minimum possible overall awkwardness of any seating arrangement.

  Signature
    int minOverallSeatingAwkwardness(int[] arr)

  Input
    n is in the range [3, 1000].
    Each height arr[i] is in the range [1, 1000].

  Output
    Return the minimum achievable overall awkwardness of any seating arrangement.

  Example
    n = 4
    arr = [5, 10, 6, 8]
    output = 4
    If the guests sit down in the permutation [3, 1, 4, 2] in clockwise order around the table (having heights [6, 5, 8, 10], in that order), then the four awkwardnesses between pairs of adjacent guests will be |6-5| = 1, |5-8| = 3, |8-10| = 2, and |10-6| = 4, yielding an overall awkwardness of 4. It's impossible to achieve a smaller overall awkwardness.
*/

// O(n log n + n)
function minOverallSeatingAwkwardness(arr) {
  let maxAwkwardness = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    const current = arr[i];
    const next = arr[i + 2];

    maxAwkwardness = Math.max(maxAwkwardness, Math.abs(current - next));
  }
  
  // Compare first two
  const first = arr[0];
  const second = arr[1];
  maxAwkwardness = Math.max(maxAwkwardness, Math.abs(first - second));
  
  // Compare last two
  const last = arr[arr.length - 1];
  const secondLast = arr[arr.length - 2];
  maxAwkwardness = Math.max(maxAwkwardness, Math.abs(last - secondLast));

  return maxAwkwardness;  
}

/*
  Sort by smallest to tallest;

  Start with tallest person
  Surround tallest person (1) with the next two tallest (2) and (3);
  Surround second tallest (2) with fourth tallest (4);
  Surround third tallest (3) with fifth tallest (5);
  Continue seating (n) and (n-2) tallest next to each other;

  Eventually shortest (n) and second shortest (n - 1) will be next to each other
  because table is round

  Compare awkwardness between every other
  Compare edges (tallest and second tallest) (shortest and second shortest)
*/

// // Tests:
// function printInteger(n) {
//   return'[' + n + ']';
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected === output);
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     const out = rightTick + ' Test #' + testCaseNumber;
//     console.log(out);
//   }
//   else {
//     let out = '';
//     out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//     out += printInteger(expected);
//     out += ' Your output: ';
//     out += printInteger(output);
//     console.log(out);
//   }
//   testCaseNumber++;
// }

// var arr1 = [5, 10, 6, 8];
// var expected1 = 4;
// var output1 = minOverallSeatingAwkwardness(arr1);
// check(expected1, output1);

// var arr2 = [1, 2, 5, 3, 7];
// var expected2 = 4;
// var output2 = minOverallSeatingAwkwardness(arr2);
// check(expected2, output2);