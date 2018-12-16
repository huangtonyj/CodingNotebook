const quickSort = require('../algorithms/quickSort');

class runningMedian {
  constructor() {
    this.store = [];
    this.length = 0; // keep track of odd or even
  }

  add(value) {
    // binary insertion?
    // return median

    this.store.push(value)
    this.length += 1;
    this.store = quickSort(this.store);

    return this.median()
  }

  median() {
    return this.store;
    return 'median'
  }
}

const rM = new runningMedian();
  console.log(rM.add(12));
  console.log(rM.add(4));
  console.log(rM.add(5));
  console.log(rM.add(3));
  console.log(rM.add(8));
  console.log(rM.add(7));