 const Heap = require('../dataStructures/Heap');

class ContinuousMedianHandler {
  constructor(value) {
    this.median = null;
    this.smallHeap = new Heap((a, b) => b - a); // max Heap
    this.bigHeap = new Heap((a, b) => a - b); // min Heap

    if (value) this.insert(value);
  }

  insert(number) {
    if (number < this.median) {
      this.smallHeap.insert(number);
    } else {
      this.bigHeap.insert(number);
    }

    this.rebalanceHeaps();
    this.updateMedian();

    return this;
  }

  rebalanceHeaps() {
    while (this.smallHeap.length() - this.bigHeap.length() > 1) {
      this.bigHeap.insert(this.smallHeap.extract());
    }

    while (this.bigHeap.length() - this.smallHeap.length() > 1) {
      this.smallHeap.insert(this.bigHeap.extract());
    }
  }

  updateMedian() {
    if (this.smallHeap.length() > this.bigHeap.length()) {
      this.median = this.smallHeap.peek();
    } else if (this.bigHeap.length() > this.smallHeap.length()) {
      this.median = this.bigHeap.peek();
    } else {
      this.median = (this.smallHeap.peek() + this.bigHeap.peek()) / 2;
    }
  }

  getMedian() {
    return this.median;
  }
}

module.exports = ContinuousMedianHandler;