// Queue built with Link List
const NodeLL = require('./NodeLL');

class Queue {
  constructor(arr) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (!!arr) { arr.forEach((el) => this.enqueue(el)); }
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new NodeLL(value);
      this.tail = this.head;
    } else {
      this.tail.next = new NodeLL(value);
      this.tail = this.tail.next;
    }
    this.length += 1;
  }

  dequeue() {
    let result = null;
    if (!this.isEmpty()) {
      result = this.head.value;
      this.head = this.head.next;
      this.length -= 1;
    }
    return result;
  }

  peek() {
    return !this.head ? null : this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }

  arrayify() {
    const resultArr = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      resultArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return resultArr;
  }
}

module.exports = Queue;

/* TEST */
// const q = new Queue();
//   q.enqueue('a');
//   q.enqueue('b');
//   q.enqueue('c');
//   console.log(q.length, 3);
//   console.log(q.dequeue(), 'a');
//   console.log(q.peek(), 'b');
//   console.log(q.dequeue(), 'b');
//   console.log(q.dequeue(), 'c');
//   console.log(q.isEmpty(), true);
//   console.log(q.dequeue(), null);
//   console.log(q.length, 0);