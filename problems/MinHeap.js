const Heap = require('../dataStructures/Heap');

class MinHeap {
  constructor() {
    this.heap = new Heap();
  }

  insert(val) {
    this.heap.insert(val);
  }

  remove() {
    this.heap.extract();
  }

}

module.exports = MinHeap;