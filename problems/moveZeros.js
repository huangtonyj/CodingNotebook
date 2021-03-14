// O(n) time O(1) space
function moveZeros(nums) {
  const length = nums.length;
  let zeroPointer = 0;
  
  while (nums[zeroPointer] !== 0 && zeroPointer < length) zeroPointer++;
  
  let pointer = zeroPointer;
  
  while (pointer < length) {
    while (nums[pointer] === 0 && pointer < length) pointer++;
    
    if (pointer < length) {
      _swap(nums, zeroPointer, pointer);
    }

    zeroPointer++;
  }
  
  return nums;
}

function _swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// O(n) time O(n) space
function moveZeros1(arr) {
  let zerosCount = 0;
  const result = [];

  arr.forEach((el) => {
    if (el === 0) {
      zerosCount++;
    } else {
      result.push(el);
    }
  });

  for (let i = 0; i < zerosCount; i++) {
    result.push(0);
  }

  return result;
}

module.exports = moveZeros;