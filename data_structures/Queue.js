// Queue built with Link List
const LLnode = require('./NodeLL');

class Queue {
  constructor(arr) {
    this.head = null;
    this.tail = null;

    if (!!arr) {arr.forEach((el) => this.enqueue(el))}
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new LLnode(value);
      this.tail = this.head;
    } else {
      this.tail.next = new LLnode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head !== null) {
      const result = this.head.value;
      this.head = this.head.next;
      return result;
    } else {
      return null;
    }
  }

  peek() {
    return !this.head ? null : this.head.value
  }

  isEmpty() {
    return this.head === null
  }
}

module.exports = Queue;

/* TEST */
// var q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// console.log(q.dequeue(), 'a');
// console.log(q.peek(), 'b');
// console.log(q.dequeue(), 'b');
// console.log(q.dequeue(), 'c');
// console.log(q.isEmpty(), true);