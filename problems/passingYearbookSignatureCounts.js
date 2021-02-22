/*
  Passing Yearbooks
  There are n students, numbered from 1 to n, each with their own yearbook. 
  They would like to pass their yearbooks around and get them signed by other students.
  You're given a list of n integers arr[1..n], which is guaranteed to be a permutation of 1..n (in other words, it includes the integers from 1 to n exactly once each, in some order). 
  The meaning of this list is described below.
  Initially, each student is holding their own yearbook. The students will then repeat the following two steps each minute: Each student i will first sign the yearbook that they're currently holding (which may either belong to themselves or to another student), and then they'll pass it to student arr[i-1]. It's possible that arr[i-1] = i for any given i, in which case student i will pass their yearbook back to themselves. Once a student has received their own yearbook back, they will hold on to it and no longer participate in the passing process.
  It's guaranteed that, for any possible valid input, each student will eventually receive their own yearbook back and will never end up holding more than one yearbook at a time.
  You must compute a list of n integers output, whose element at i-1 is equal to the number of signatures that will be present in student i's yearbook once they receive it back.

  Signature
    int[] passingYearbookSignatureCounts(int[] arr)

  Input
    n is in the range [1, 100,000].
    Each value arr[i] is in the range [1, n], and all values in arr[i] are distinct.

  Output
    Return a list of n integers output, as described above.

  Example 1
    n = 2
    arr = [2, 1]
    output = [2, 2]
    Pass 1:
    Student 1 signs their own yearbook. Then they pass the book to the student at arr[0], which is Student 2.
    Student 2 signs their own yearbook. Then they pass the book to the student at arr[1], which is Student 1.
    Pass 2:
    Student 1 signs Student 2's yearbook. Then they pass it to the student at arr[0], which is Student 2.
    Student 2 signs Student 1's yearbook. Then they pass it to the student at arr[1], which is Student 1.
    Pass 3:
    Both students now hold their own yearbook, so the process is complete.
    Each student received 2 signatures.

  Example 2
    n = 2
    arr = [1, 2]
    output = [1, 1]
    Pass 1:
    Student 1 signs their own yearbook. Then they pass the book to the student at arr[0], which is themself, Student 1.
    Student 2 signs their own yearbook. Then they pass the book to the student at arr[1], which is themself, Student 2.
    Pass 2:
    Both students now hold their own yearbook, so the process is complete.
    Each student received 1 signature.
*/

function passingYearbookSignatureCounts(arr) {
  const signatureCounts = arr.map(_ => null);

  for (let i = 0; i < arr.length; i++) {
    signatureCounts[i] = dfs(arr, i);
  }
  
  return signatureCounts;
}

function dfs(arr, start) {
  let count = 1;
  let current = arr[start];

  while (count < arr.length && current !== start + 1) {
    count++;
    current = arr[current - 1];
  }

  return current === start + 1 ? count : null;
}

/*
  Basically initially arr defines the directed graph of the next recipent;
  
*/

// Tests:
function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var testCaseNumber = 1;

function check(expected, output) {
  var expectedSize = expected.length;
  var outputSize = output.length;
  var result = true;
  if (expectedSize !== outputSize) {
    result = false;
  }
  for (var i = 0; i < Math.min(expectedSize, outputSize); i++) {
    result &= (output[i] === expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    const out = rightTick + ' Test #' + testCaseNumber;
    console.log(out);
  }
  else {
    let out = '';
    out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  testCaseNumber++;
}

var arr1 = [2, 1];
var expected1 = [2, 2];
var output1 = passingYearbookSignatureCounts(arr1);
check(expected1, output1);

var arr2 = [1, 2];
var expected2 = [1, 1];
var output2 = passingYearbookSignatureCounts(arr2);
check(expected2, output2);

var arr3 = [4, 3, 2, 5, 1];
var expected3 = [3, 2, 2, 3, 3];
var output3 = passingYearbookSignatureCounts(arr3);
check(expected3, output3);