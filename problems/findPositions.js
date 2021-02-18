/*
  Queue Removals

  You're given a list of n integers arr, which represent elements in a queue (in order from front to back). 
  You're also given an integer x, and must perform x iterations of the following 3-step process:
  Pop x elements from the front of queue (or, if it contains fewer than x elements, pop all of them)
  Of the elements that were popped, find the one with the largest value (if there are multiple such elements, take the one which had been popped the earliest), and remove it
  For each one of the remaining elements that were popped (in the order they had been popped), decrement its value by 1 if it's positive (otherwise, if its value is 0, then it's left unchanged), and then add it back to the queue
  Compute a list of x integers output, the ith of which is the 1-based index in the original array of the element which had been removed in step 2 during the ith iteration.

  Signature
    int[] findPositions(int[] arr, int x)

  Input
    x is in the range [1, 316].
    n is in the range [x, x*x].
    Each value arr[i] is in the range [1, x].

  Output
    Return a list of x integers output, as described above.

  Example
    n = 6
    arr = [1, 2, 2, 3, 4, 5]
    x = 5
    output = [5, 6, 4, 1, 2]
    The initial queue is [1, 2, 2, 3, 4, 5] (from front to back).
    In the first iteration, the first 5 elements are popped off the queue, leaving just [5]. Of the popped elements, the largest one is the 4, which was at index 5 in the original array. The remaining elements are then decremented and added back onto the queue, whose contents are then [5, 0, 1, 1, 2].
    In the second iteration, all 5 elements are popped off the queue. The largest one is the 5, which was at index 6 in the original array. The remaining elements are then decremented (aside from the 0) and added back onto the queue, whose contents are then [0, 0, 0, 1].
    In the third iteration, all 4 elements are popped off the queue. The largest one is the 1, which had the initial value of 3 at index 4 in the original array. The remaining elements are added back onto the queue, whose contents are then [0, 0, 0].
    In the fourth iteration, all 3 elements are popped off the queue. Since they all have an equal value, we remove the one that was popped first, which had the initial value of 1 at index 1 in the original array. The remaining elements are added back onto the queue, whose contents are then [0, 0].
    In the final iteration, both elements are popped off the queue. We remove the one that was popped first, which had the initial value of 2 at index 2 in the original array.
*/

function findPositions(arr, x) {
  const output = [];
  const idxes = arr.map((_, idx) => idx + 1);

  while (output.length < x) {
    const poppedNums = [];
    const poppedIdxes = [];
    let largest = -Infinity;
    let largestIdx = null;

    while(poppedNums.length < x) {
      const num = arr.shift();
      const idx = idxes.shift();
      
      if (num > largest) {
        largest = num;
        largestIdx = idx;
      }

      poppedNums.push(num);
      poppedIdxes.push(idx);
    }

    while (poppedNums.length) {
      const num = poppedNums.shift();
      const idx = poppedIdxes.shift();
      
      if (idx !== largestIdx) {
        arr.push(Math.max(num - 1, 0));
        idxes.push(idx);
      }
    }

    output.push(largestIdx);
  }

  return output;
}

// // Tests:
// function printintegerArray(array) {
//   var size = array.length;
//   var res = '';
//   res += '[';
//   var i = 0;
//   for (i = 0; i < size; i++) {
//     if (i !== 0) {
//     	res += ', ';
//     }
//     res += array[i];
//   }
//   res += ']';
//   return res;
// }

// var test_case_number = 1;

// function check(expected, output) {
//   var expected_size = expected.length;
//   var output_size = output.length;
//   var result = true;
//   if (expected_size != output_size) {
//     result = false;
//   }
//   for (var i = 0; i < Math.min(expected_size, output_size); i++) {
//     result &= (output[i] == expected[i]);
//   }
//   var rightTick = "\u2713";
// 	var wrongTick = "\u2717";
//   if (result) {
//   	var out = rightTick + ' Test #' + test_case_number;
//   	console.log(out);
//   }
//   else {
//   	var out = '';
//   	out += wrongTick + ' Test #' + test_case_number + ': Expected ';
//   	out += printintegerArray(expected);
//   	out += ' Your output: ';
//   	out += printintegerArray(output);
//   	console.log(out);
//   }
//   test_case_number++;
// }

// var n_1 = 6
// var x_1 = 5
// var arr_1 = [1, 2, 2, 3, 4, 5];
// var expected_1 = [5, 6, 4, 1, 2 ];
// var output_1 = findPositions(arr_1, x_1);
// check(expected_1, output_1);

// var n_2 = 13
// var x_2 = 4
// var arr_2 = [2, 4, 2, 4, 3, 1, 2, 2, 3, 4, 3, 4, 4];
// var expected_2 = [2, 5, 10, 13];
// var output_2 = findPositions(arr_2, x_2);
// check(expected_2, output_2);

// // Add your own test cases here