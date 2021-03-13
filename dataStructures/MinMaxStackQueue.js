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
    const inStackMax = this.inStack.getMax() || -Infinity;
    const outStackMax = this.outStack.getMax() || -Infinity;

    return this.isEmpty() ? null : Math.max(inStackMax, outStackMax);
  }
  
  min() {
    const inStackMin = this.inStack.getMin() !== null ? this.inStack.getMin() : Infinity;
    const outStackMin = this.outStack.getMin() !== null ? this.outStack.getMin() : Infinity;
    
    return this.isEmpty() ? null : Math.min(inStackMin, outStackMin);
  }

  pourOver() {
    while (!this.inStack.isEmpty()) {
      this.outStack.push(this.inStack.pop());
    }
  }

  print() {
    console.log(this.inStack.stack, this.outStack.stack);
  }
}

module.exports = MinMaxStackQueue;

// const myMinMaxStackQueue = new MinMaxStackQueue([4,5,6]);
//   myMinMaxStackQueue.enqueue(1);
//   myMinMaxStackQueue.enqueue(2);
//   myMinMaxStackQueue.enqueue(3);
//   myMinMaxStackQueue.print();

//   console.log('empty', myMinMaxStackQueue.isEmpty(), false);

//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 4);
//     console.log('min', myMinMaxStackQueue.min(), 1);
//     console.log('max', myMinMaxStackQueue.max(), 6);
//     myMinMaxStackQueue.print();
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 5);
//     console.log('min', myMinMaxStackQueue.min(), 1);
//     console.log('max', myMinMaxStackQueue.max(), 6);
//     myMinMaxStackQueue.print();
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 6);
//     console.log('min', myMinMaxStackQueue.min(), 1);
//     console.log('max', myMinMaxStackQueue.max(), 3);
//     myMinMaxStackQueue.print();
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 1);
//     console.log('min', myMinMaxStackQueue.min(), 2);
//     console.log('max', myMinMaxStackQueue.max(), 3);
//     myMinMaxStackQueue.print();
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 2);
//     console.log('min', myMinMaxStackQueue.min(), 3);
//     console.log('max', myMinMaxStackQueue.max(), 3);
//     myMinMaxStackQueue.print();
//   console.log('dequeue', myMinMaxStackQueue.dequeue(), 3);
  
//   console.log('empty', myMinMaxStackQueue.isEmpty(), true);

//   console.log('dequeue', myMinMaxStackQueue.dequeue(), null);
//     console.log('min', myMinMaxStackQueue.min(), null);
//     console.log('max', myMinMaxStackQueue.max(), null);


// const myMinMaxStackQueue2 = new MinMaxStackQueue([1,0,2]);
//   myMinMaxStackQueue2.print();
//   console.log(myMinMaxStackQueue2.max(), myMinMaxStackQueue2.min());
  
