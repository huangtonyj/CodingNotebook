// const Queue = require('./Queue');

// class MinMaxQueue {
//   constructor(arr) {
//     this.queue = new Queue();
//     this.minQueue = new Queue();
//     this.maxQueue = new Queue();

//     if (arr) {arr.forEach((el) => this.enqueue(el))}
//   }

//   peek() {
//     return this.queue.head.value;
//   }

//   length() {
//     return this.queue.length;
//   }

//   isEmpty() {
//     return this.queue.isEmpty();
//   }
  
//   min() {
//     return this.isEmpty() ? null : this.minQueue[this.minQueue.length - 1];
//   }
//   max() {
//     return this.isEmpty() ? null : this.maxQueue[this.maxQueue.length - 1];
//   }

//   enqueue(item) {
//     this.queue.enqueue(item);

//     if (item < this.min)

//     console.log(this.queue.arrayify());
//   }

//   dequeue() {
//     const result = this.queue.dequeue();

//     console.log(this.queue.arrayify());
//     return result;
//   }

// }

// // let myMinMaxQueue = new MinMaxQueue();
// //   myMinMaxQueue.enqueue(1);
// //   myMinMaxQueue.enqueue(2);
// //   myMinMaxQueue.enqueue(3);
// //   myMinMaxQueue.enqueue(4);
// //   myMinMaxQueue.enqueue(3);
// //   myMinMaxQueue.enqueue(0);
// //   console.log(myMinMaxQueue.dequeue());
// //   console.log(myMinMaxQueue.dequeue());
// //   console.log(myMinMaxQueue.dequeue());

// // let myMinMaxQueue2 = new MinMaxQueue([1, 0, 2, 5, 4, 8]);