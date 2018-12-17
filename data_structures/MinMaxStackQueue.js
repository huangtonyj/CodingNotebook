const MinMaxStack = require('./MinMaxStack');

class MinMaxStackQueue {
  constructor(arr) {
    this.inStack = new MinMaxStack(arr);
    this.outStack = new MinMaxStack();
    this.length = arr.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(el) {
    this.inStack.push(el);
    this.length += 1;
  }

  dequeue() {
    if (this.outStack.isEmpty()) { this.pourOver(); }
    if (this.outStack.isEmpty()) { return null; }
    this.length -= 1;
    return this.outStack.pop();
  }

  max() {
    const inStackMax = this.inStack.max() || -Infinity;
    const outStackMax = this.outStack.max() || -Infinity;

    return this.isEmpty() ? null : Math.max(inStackMax, outStackMax);
  }
  
  min() {
    const inStackMin = this.inStack.min() || Infinity;
    const outStackMin = this.outStack.min() || Infinity;
    
    return this.isEmpty() ? null : Math.min(inStackMin, outStackMin);
  }

  pourOver() {
    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
  }
}

module.exports = MinMaxStackQueue;

// const myMinMaxStackQueue = new MinMaxStackQueue([4,5,6]);
//   myMinMaxStackQueue.enqueue(1);
//   myMinMaxStackQueue.enqueue(2);
//   myMinMaxStackQueue.enqueue(3);

//   console.log('empty', myMinMaxStackQueue.isEmpty(), false);

//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 4);
//     console.log('min', myMinMaxStackQueue.min(), 1);
//     console.log('max', myMinMaxStackQueue.max(), 6);
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 5);
//     console.log('min', myMinMaxStackQueue.min(), 1);
//     console.log('max', myMinMaxStackQueue.max(), 6);
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 6);
//     console.log('min', myMinMaxStackQueue.min(), 1);
//     console.log('max', myMinMaxStackQueue.max(), 3);
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 1);
//     console.log('min', myMinMaxStackQueue.min(), 2);
//     console.log('max', myMinMaxStackQueue.max(), 3);
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 2);
//     console.log('min', myMinMaxStackQueue.min(), 3);
//     console.log('max', myMinMaxStackQueue.max(), 3);
//   console.log('dequeue', myMinMaxStackQueue.dequeue());
  
//   console.log('empty', myMinMaxStackQueue.isEmpty(), true);

//   console.log('dequeue', myMinMaxStackQueue.dequeue(), null);
//     console.log('min', myMinMaxStackQueue.min(), null);
//     console.log('max', myMinMaxStackQueue.max(), null);
