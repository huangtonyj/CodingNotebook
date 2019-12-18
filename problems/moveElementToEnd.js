function moveElementToEnd(arr, toMove) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < rightIdx) {
    if (arr[leftIdx] === toMove) {
      swapElements(arr, leftIdx, rightIdx);
      rightIdx--;
    } else {
      leftIdx++;
    }
  }
  
  return arr;
}

const swapElements = (arr, leftIdx, rightIdx) => {
  const temp = arr[leftIdx];
  arr[leftIdx] = arr[rightIdx];
  arr[rightIdx] = temp;
};

module.exports = moveElementToEnd;