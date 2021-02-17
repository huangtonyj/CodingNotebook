/*
  Encrypted Words
  You've devised a simple encryption method for alphabetic strings that shuffles the characters in such a way that the resulting string is hard to quickly read, but is easy to convert back into the original string.
  When you encrypt a string S, you start with an initially-empty resulting string R and append characters to it as follows:
  Append the middle character of S (if S has even length, then we define the middle character as the left-most of the two central characters)
  Append the encrypted version of the substring of S that's to the left of the middle character (if non-empty)
  Append the encrypted version of the substring of S that's to the right of the middle character (if non-empty)
  For example, to encrypt the string "abc", we first take "b", and then append the encrypted version of "a" (which is just "a") and the encrypted version of "c" (which is just "c") to get "bac".
  If we encrypt "abcxcba" we'll get "xbacbca". That is, we take "x" and then append the encrypted version "abc" and then append the encrypted version of "cba".

  Input
    S contains only lower-case alphabetic characters
    1 <= |S| <= 10,000

  Output
    Return string R, the encrypted version of S.

  Example 1
    S = "abc"
    R = "bac"

  Example 2
    S = "abcd"
    R = "bacd"

  Example 3
    S = "abcxcba"
    R = "xbacbca"

  Example 4
    S = "facebook"
    R = "eafcobok"
*/

function findEncryptedWord(s) {
  if (s === '') return '';

  const midIdx = Math.floor((s.length - 1) / 2);
  const midChar = s[midIdx];
  const left = s.slice(0, midIdx);
  const right = s.slice(midIdx + 1);

  return midChar + findEncryptedWord(left) + findEncryptedWord(right);
}

// // Tests
// function printString(str) {
//   var out = '["' + str + '"]';
//   return out;
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected == output);
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     var out = rightTick + ' Test #' + testCaseNumber;
//     console.log(out);
//   }
//   else {
//     var out = '';
//     out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//     out += printString(expected);
//     out += ' Your output: ';
//     out += printString(output);
//     console.log(out);
//   }
//   testCaseNumber++;
// }

// var s1 = "abc";
// var expected1 = "bac";
// var output1 = findEncryptedWord(s1);
// check(expected1, output1);

// var s2 = "abcd";
// var expected2 = "bacd";
// var output2 = findEncryptedWord(s2);
// check(expected2, output2);

// var s3 = "abcxcba";
// var expected3 = "xbacbca";
// var output3 = findEncryptedWord(s3);
// check(expected3, output3);

// var s4 = "facebook";
// var expected4 = "eafcobok";
// var output4 = findEncryptedWord(s4);
// check(expected4, output4);