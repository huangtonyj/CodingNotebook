// Return an array of size of 3 elements that adds up to k.

// function twoSumToK(arr, k, el) {
//   // Sort array
//   // two pointers, one left and on right

//   // Loop through each one
//     // while pointers aren't crossed
//     // move left and right respective to their sum
//     // push to result if it adds up to k

//   arr = arr.sort((a,b) => a - b);

//   const result = [];

//   let leftPointer = 0, rightPointer = arr.length - 1;
//   let leftVal, rightVal;

//   while(leftPointer < rightPointer) {
//     leftVal = arr[leftPointer];
//     rightVal = arr[rightPointer];

//     if (leftVal === el) {
//       leftPointer++;
//       continue;
//     } else if (rightVal === el) {
//       rightPointer--;
//       continue;
//     }


// // console.log(leftVal, rightVal);
//     if (leftVal + rightVal > k) {
//       rightPointer--;
//     } else if (leftVal + rightVal < k) {
//       leftPointer++;
//     } else {
//       result.push([leftVal, rightVal]);
//       result.push([rightVal, leftVal]);
//       rightPointer--;
//       leftPointer++;
//     }
//   }
//   return result;
// }

// function threeSumToK(arr, k) {
//   const result = [];
//   let twoSumToKResult;

//   arr = arr.sort((a,b) => a - b);

//   arr.forEach(el => {
//     twoSumToKResult = twoSumToK(arr, k - el, el);
//     if (twoSumToKResult.length > 0) {
//       twoSumToKResult.forEach(twoSumPair => {
//         result.push([...twoSumPair, el]);
//       });
//     }
//   });

//   return result;
// }


function twoSumToK(arr, k, ignoredEl) {
  const result = [];
  const log = new Set();

  arr.forEach((el) => {
    if (el !== ignoredEl) {
      if (log.has(k - el)) { 
        result.push([k - el, el]);
        result.push([el, k - el]);
      }
      log.add(el);
    }
  });
  return result;
}

function threeSumToK(arr, k) {
  let result = [];
  let twoSumToKResult;
  let temp;

  arr.forEach(el => {

    twoSumToKResult = twoSumToK(arr, k - el, el);

    if (twoSumToKResult.length > 0) { 
      temp = twoSumToKResult.map(pair => [...pair, el]);
      result = result.concat(temp);
    }

  });

  return result.sort();

}

console.log(threeSumToK([1, 3, 5, 2, 4, 6, 0, 7], 8));