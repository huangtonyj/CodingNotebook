class HeapItem {
  constructor(sort) {
    const sortASC = (a, b) => a - b;
    this.sort = sort || sortASC;
    this.store = [];
  }

  insert(item) {
    this.store.push(item);
    this.heapifyUp(this.store.length - 1);
  }

  extract() {
    if (this.length() === 1) { return this.store.pop(); }

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
        if (this.sort(this.store[childIdx[0]].value, this.store[childIdx[1]].value) <= 0) {
          theChildIdx = childIdx[0];
        } else {
          theChildIdx = childIdx[1];
        }
        break;
    }

    if (this.sort(this.store[theChildIdx].value, this.store[nodeIdx].value) <= 0) {
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

    if (this.sort(this.store[nodeIdx].value, this.store[parentIdx].value) <= 0) {
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

class SimpleDS {
  constructor(value, data) {
    this.value = value;
    this.data = data;
  }
}


module.exports = HeapItem;


const a = new SimpleDS(5, 'five');
const b = new SimpleDS(4, 'four');
const c = new SimpleDS(0, 'zero');
const d = new SimpleDS(1, 'one');
const e = new SimpleDS(2, 'two');
const f = new SimpleDS(3, 'three');

const myHeapASC = new HeapItem();
  myHeapASC.insert(a);
  myHeapASC.insert(b);
  myHeapASC.insert(c);
  myHeapASC.insert(d);
  myHeapASC.insert(e);
  myHeapASC.insert(f);

  while (myHeapASC.length() > 0) {
    console.log(myHeapASC.extract().data);
  }
  console.log('zero', 'one', 'two', 'three', 'four', 'five');

// const myHeapDSC = new HeapItem((a, b) => b - a);
const myHeapDSC = myHeapASC;
  myHeapDSC.sort = (a, b) => b-a;
  myHeapDSC.insert(a);
  myHeapDSC.insert(b);
  myHeapDSC.insert(c);
  myHeapDSC.insert(d);
  myHeapDSC.insert(e);
  myHeapDSC.insert(f);

  while (myHeapDSC.length() > 0) {
    console.log(myHeapDSC.extract().data);
  }
  console.log('five', 'four', 'three', 'two', 'one', 'zero');