function isMinHeap(arr) {
  let ans = true;
  let parentVal, leftChildVal, rightChildVal;

  for (let parentIdx = 0; parentIdx < arr.length; parentIdx++) {
    parentVal = arr[parentIdx];
    leftChildVal = arr[leftChildIdx(parentIdx)];
    rightChildVal = arr[rightChildIdx(parentIdx)];
    if (leftChildVal && leftChildVal < parentVal) { 
      ans = false; 
      break;
    }
    if (rightChildVal && rightChildVal < parentVal) { 
      ans = false; 
      break;
    }
  }

  return ans;
}

const leftChildIdx = (parentIdx) => parentIdx * 2 + 1;
const rightChildIdx = (parentIdx) => parentIdx * 2 + 2;

console.log(isMinHeap([2, 3, 2, 11, 4, 7, 4]), true);
console.log(isMinHeap([2, 3, 1, 11, 4, 7, 4]), false);