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
