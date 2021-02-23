/*
  Matching Pairs
  Given two strings s and t of length N, find the maximum number of possible matching pairs in strings s and t after swapping exactly two characters within s.
  A swap is switching s[i] and s[j], where s[i] and s[j] denotes the character that is present at the ith and jth index of s, respectively. The matching pairs of the two strings are defined as the number of indices for which s[i] and t[i] are equal.
  Note: This means you must swap two characters at different indices.

  Signature
    int matchingPairsAfterTwoSwaps(String s, String t)
    Input
    s and t are strings of length N
    N is between 2 and 1,000,000

  Output
    Return an integer denoting the maximum number of matching pairs

  Example 1
    s = "abcd"
    t = "adcb"
    output = 4
    Explanation:
    Using 0-based indexing, and with i = 1 and j = 3, s[1] and s[3] can be swapped, making it  "adcb".
    Therefore, the number of matching pairs of s and t will be 4.

  Example 2
    s = "mno"
    t = "mno"
    output = 1
    Explanation:
    Two indices have to be swapped, regardless of which two it is, only one letter will remain the same. If i = 0 and j=1, s[0] and s[1] are swapped, making s = "nmo", which shares only "o" with t.
*/

function matchingPairsAfterTwoSwaps(s, t) {
  const mismatchedPairs = new Set();
  let matchingCounter = 0;

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (charS === charT) {
      matchingCounter++;
    } else {
      mismatchedPairs.add(`${charS}-${charT}`);
    }
  }

  for (let mismatchedPair of Array.from(mismatchedPairs)) {
    const partnerPair = mismatchedPair.split('-').reverse().join('-');

    if (mismatchedPairs.has(partnerPair)) return matchingCounter + 2;
  }

  if (mismatchedPairs.size === 1) return matchingCounter - 1;
  if (mismatchedPairs.size === 0) return matchingCounter - 2;

  return matchingCounter;
}

// // Tests:
// function printInteger(n) {
//   return '[' + n + ']';
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected == output);
//   var rightTick = "\u2713";
// 	var wrongTick = "\u2717";
//   if (result) {
//   	const out = rightTick + ' Test #' + testCaseNumber;
//   	console.log(out);
//   }
//   else {
//   	let out = '';
//   	out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//   	out += printInteger(expected);
//   	out += ' Your output: ';
//   	out += printInteger(output);
//   	console.log(out);
//   }
//   testCaseNumber++;
// }

// var s1 = "abcde";
// var t1 = "adcbe";
// var expected1 = 5;
// var output1 = matchingPairsAfterTwoSwaps(s1, t1);
// check(expected1, output1);

// var s2 = "abcd";
// var t2 = "abcd";
// var expected2 = 2;
// var output2 = matchingPairsAfterTwoSwaps(s2, t2);
// check(expected2, output2); 

// var s3 = "abcd";
// var t3 = "abce";
// var expected3 = 2;
// var output3 = matchingPairsAfterTwoSwaps(s3, t3);
// check(expected3, output3); 