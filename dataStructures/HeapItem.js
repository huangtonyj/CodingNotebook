// This class is similar to heap, but heapifies based on "this.value"

class HeapItem {
  constructor(arr, sort, comparator = 'value') {
    const sortASC = (a, b) => a - b; // min-heap
    this.sort = sort || sortASC;
    this.store = [];
    this.comparator = comparator;

    if (arr) { arr.forEach(el => this.insert(el)); }
  }

  insert(item) {
    this.store.push(item);
    this.heapifyUp(this.store.length - 1);
  }

  extract() {
    if (this.length() === 1) {
      return this.store.pop();
    }

    const result = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return result;
  }

  length() {
    return this.store.length;
  }

  peek() {
    return this.store[0];
  }

  heapifyDown(nodeIdx) {
    let childIdx = this.childrenIdx(nodeIdx);

    let theChildIdx;
    switch (childIdx.length) {
      case 0:
        return;
      case 1:
        theChildIdx = childIdx[0];
        break;
      case 2:
        if (this.sort(this.store[childIdx[0]][this.comparator], this.store[childIdx[1]][this.comparator]) <= 0) {
          theChildIdx = childIdx[0];
        } else {
          theChildIdx = childIdx[1];
        }
        break;
    }

    if (this.sort(this.store[theChildIdx][this.comparator], this.store[nodeIdx][this.comparator]) <= 0) {
      const temp = this.store[nodeIdx];
      this.store[nodeIdx] = this.store[theChildIdx];
      this.store[theChildIdx] = temp;
    }

    this.heapifyDown(theChildIdx);
  }

  heapifyUp(nodeIdx) {
    if (nodeIdx === 0) {
      return;
    }

    const parentIdx = this.parentIdx(nodeIdx);

    if (this.sort(this.store[nodeIdx][this.comparator], this.store[parentIdx][this.comparator]) <= 0) {
      const temp = this.store[nodeIdx];
      this.store[nodeIdx] = this.store[parentIdx];
      this.store[parentIdx] = temp;
    }

    this.heapifyUp(parentIdx);
  }

  parentIdx(nodeIdx) {
    if (nodeIdx === 0) {
      return null;
    }
    return Math.floor((nodeIdx - 1) / 2);
  }

  childrenIdx(nodeIdx) {
    const childIdx = [(nodeIdx * 2 + 1), (nodeIdx * 2 + 2)];

    if (this.length() <= childIdx[childIdx.length - 1]) {
      childIdx.pop();
    }
    if (this.length() <= childIdx[childIdx.length - 1]) {
      childIdx.pop();
    }

    return childIdx;
  }
}

module.exports = HeapItem;

// const testArr = [
//   {data: 'five', comparator: 5},
//   {data: 'three', comparator: 3},
//   {data: 'zero', comparator: 0},
//   {data: 'two', comparator: 2},
//   {data: 'one', comparator: 1},
//   {data: 'four', comparator: 4},
// ];

// // Test for min-Heap with this.value;
// const myMinHeap = new HeapItem(testArr, (a, b) => a - b, 'comparator');
// const myMinHeapResult = [];
// while (myMinHeap.length() > 0) {
//   myMinHeapResult.push(myMinHeap.extract().data);
// }
// console.log(...myMinHeapResult, 'zero', 'one', 'two', 'three', 'four', 'five');

// // Test for max-Heap with this.value;
// const myMaxHeap = new HeapItem(testArr, (a, b) => b - a, 'comparator');
// const myMaxHeapResult = [];
// while (myMaxHeap.length() > 0) {
//   myMaxHeapResult.push(myMaxHeap.extract().data);
// }
// console.log(...myMaxHeapResult, 'five', 'four', 'three', 'two', 'one', 'zero');