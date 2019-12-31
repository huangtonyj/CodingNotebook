// Given a list of strictly positive integers, partition the list into 3 contiguous partitions 
// which each sum up to the same value.If not possible, return null.

// For example, given the following list:

//   [3, 5, 8, 0, 8]
// Return the following 3 partitions:

//   [
//     [3, 5],
//     [8, 0],
//     [8]
//   ]

function contiguousPartitions(arr, partition = 3) {
  const total = arr.reduce((acc, el) => acc + el);
  const partitionTotal = total / partition;

  const result = [];
  let currentGroup = [];
  let currentTotal = 0;

  for (const el of arr) {
    currentGroup.push(el);
    currentTotal += el;
    
    if (currentTotal === partitionTotal) {
      result.push(currentGroup);
      currentGroup = [];
      currentTotal = 0;
    } else if (currentTotal > partitionTotal) {
      return null;
    }
  }

  return result;
}

console.log(contiguousPartitions([3, 5, 8, 0, 8]), [
  [ 3, 5 ], 
  [ 8 ], 
  [ 0, 8 ] 
]);

console.log(contiguousPartitions([3, 5, 4, 8, 0, 8]), null);