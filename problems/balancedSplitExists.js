/*
  Balanced Split
  Given an array of integers (which may include repeated integers), determine if there's a way to split the array into two subsequences A and B such that the sum of the integers in both arrays is the same, and all of the integers in A are strictly smaller than all of the integers in B.
  Note: Strictly smaller denotes that every integer in A must be less than, and not equal to, every integer in B.

  Signature
    bool balancedSplitExists(int[] arr)

  Input
    All integers in array are in the range [0, 1,000,000,000].

  Output
    Return true if such a split is possible, and false otherwise.

  Example 1
    arr = [1, 5, 7, 1]
    output = true
    We can split the array into A = [1, 1, 5] and B = [7].

  Example 2
    arr = [12, 7, 6, 7, 6]
    output = false
    We can't split the array into A = [6, 6, 7] and B = [7, 12] since this doesn't satisfy the requirement that all integers in A are smaller than all integers in B.
*/

function balancedSplitExists(arr) {
  arr.sort((a, b) => a - b);

  let prevLeftNum = arr.shift();
  let prevRightNum = arr.pop();
  let leftTotal = prevLeftNum;
  let rightTotal = prevRightNum;

  while (arr.length) {
    if (leftTotal < rightTotal) {
      prevLeftNum = arr.shift();
      leftTotal += prevLeftNum;
    } else {
      prevRightNum = arr.pop();
      rightTotal += prevRightNum;
    }

    if (prevLeftNum === prevRightNum) return false;
  }

  return leftTotal === rightTotal;
}

// Tests
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var testCaseNumber = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + testCaseNumber;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  testCaseNumber++;
}

var arr1 = [2, 1, 2, 5];
var expected1 = true;
var output1 = balancedSplitExists(arr1); 
check(expected1, output1); 

var arr2 = [3, 6, 3, 4, 4];
var expected2 = false;
var output2 = balancedSplitExists(arr2); 
check(expected2, output2); 

var arr3 = [1, 5, 7, 1];
var expected3 = true;
var output3 = balancedSplitExists(arr3); 
check(expected3, output3); 

var arr4 = [12, 7, 6, 7, 6];
var expected4 = false;
var output4 = balancedSplitExists(arr4); 
check(expected4, output4); 

var arr5 = [1, 2, 3, 4, 9];
var expected5 = false;
var output5 = balancedSplitExists(arr5); 
check(expected5, output5); 