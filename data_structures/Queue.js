// Queue built with Link List
const LLnode = require('./LLnode');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
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