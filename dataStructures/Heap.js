class Heap {
  constructor(sort) {
    const sortASC = (a,b) => a - b;

    this._sort = sort || sortASC;
    this._store = [];
  }

  insert(item) {
    this._store.push(item);
    this._heapifyUp(this._store.length - 1);
  }

  extract() {
    if (this.length() === 1) return this._store.pop();

    const result = this._store[0];
    this._store[0] = this._store.pop();
    this._heapifyDown(0);

    return result;
  }

  length() {
    return this._store.length;
  }

  peek() {
    return this._store[0];
  }

  _heapifyDown(nodeIdx) {
    const theChildIdx = this._getTheChildIdx(nodeIdx);
    const theChildValue = this._store[theChildIdx];
    const nodeValue = this._store[nodeIdx];

    if (theChildIdx === null) return;
    if (this._sort(theChildValue, nodeValue) <= 0) this._swap(theChildIdx, nodeIdx);

    this._heapifyDown(theChildIdx);
  }

  _heapifyUp(nodeIdx) {
    if (nodeIdx === 0) { return; }

    const parentIdx = this._parentIdx(nodeIdx);
    const parentValue = this._store[parentIdx];
    const nodeValue = this._store[nodeIdx];

    if (this._sort(nodeValue, parentValue) <= 0) this._swap(nodeIdx, parentIdx);

    this._heapifyUp(parentIdx);
  }

  _getTheChildIdx(nodeIdx) {
    const childIdxLeft = nodeIdx * 2 + 1;
    const childIdxRight = nodeIdx * 2 + 2;
    const childValueLeft = this._store[childIdxLeft] || null;
    const childValueRight = this._store[childIdxRight] || null;

    if (childValueRight) return this._sort(childValueLeft, childValueRight) <= 0 ? childIdxLeft : childIdxRight;
    if (childValueLeft) return childIdxLeft;
    return null;
  }

  _parentIdx(nodeIdx) {
    return nodeIdx === 0 ? null : Math.floor((nodeIdx - 1) / 2);
  }

  _swap(idx1, idx2) {
    const temp = this._store[idx1];

    this._store[idx1] = this._store[idx2];
    this._store[idx2] = temp;
  }
}

module.exports = Heap;

/*
const myHeap = new Heap();
  myHeap.insert(5)
  myHeap.insert(4)
  myHeap.insert(0)
  myHeap.insert(1)
  myHeap.insert(2)
  myHeap.insert(3)
  console.log(myHeap);


       0
     /  \
    1   2
   /\   /\
  3 4  5 __

0: 1, 2
1: 3, 4
2: 5, __

[0, 1, 2, 3, 4, 5]
*/