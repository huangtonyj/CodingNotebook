// Stack built with Link List
const NodeLL = require('./NodeLL');

class Stack {
  constructor(arr) {
    this.head = null;

    if (!!arr) {arr.forEach((el) => this.push(el))}
  }

  push(item) {
    const prevHead = this.head;
    this.head = new NodeLL(item);
    this.head.next = prevHead;
  }

  pop() {
    const result = this.head;
    this.head = this.head.next;
    return result;
  }  

  peek() {
    return !this.head ? null : this.head.value
  }

  isEmpty() {
    return this.head === null
  }
}

module.exports = Stack;

/* TEST */
// var s = new Stack();
// s.push('a');
// s.push('b');
// s.push('c');
// console.log(s.pop(), 'c');
// console.log(s.peek(), 'b');
// console.log(s.pop(), 'b');
// console.log(s.pop(), 'a');
// console.log(s.isEmpty(), true);