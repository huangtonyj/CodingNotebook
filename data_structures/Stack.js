// Stack built with Link List
const LLnode = require('./LLnode');

class Stack {
  constructor() {
    this.head = null;
  }

  push(item) {
    const prevHead = this.head;
    this.head = new LLnode(item);
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