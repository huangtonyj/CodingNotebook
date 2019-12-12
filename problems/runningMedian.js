const { quickSort } = require('../algorithms/quickSort');

class runningMedian {
  constructor() {
    this.store = [];
    this.effectiveMedian = null;
  }

  add(value) {
    // binary insertion?
    this.store.push(value)
    this.store = quickSort(this.store);

    return this.median();
  }

  median() {
    const mid = Math.floor(this.store.length / 2);

    if (this.store.length & 1) {
      return this.store[mid];
    } else {
      return (this.store[mid] + this.store[mid-1]) / 2;
    }
  }
}

const rM = new runningMedian();
  console.log(rM.add(12), 12);
  console.log(rM.add(4), 8);
  console.log(rM.add(5), 5);
  console.log(rM.add(3), 4.5);
  console.log(rM.add(8), 5);
  console.log(rM.add(7), 6);