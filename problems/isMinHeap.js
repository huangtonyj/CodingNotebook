function isMinHeap(arr) {
  let parentVal, leftChildVal, rightChildVal;
  let ans = true;
  let parentIdx = 0;

  while (ans && parentIdx < arr.length) {
    parentVal = arr[parentIdx];
    leftChildVal = arr[leftChildIdx(parentIdx)];
    rightChildVal = arr[rightChildIdx(parentIdx)];

    if (leftChildVal && leftChildVal < parentVal) ans = false;
    if (rightChildVal && rightChildVal < parentVal) ans = false;

    parentIdx++;
  }

  return ans;
}

const leftChildIdx = (parentIdx) => parentIdx * 2 + 1;
const rightChildIdx = (parentIdx) => parentIdx * 2 + 2;

console.log(isMinHeap([2, 3, 2, 11, 4, 7, 4]), true);
console.log(isMinHeap([2, 3, 1, 11, 4, 7, 4]), false);