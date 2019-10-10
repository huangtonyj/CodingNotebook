// Stack built with Link List
const NodeLL = require('./NodeLL');

class Stack {
  constructor(arr) {
    this.head = null;
    this.length = 0;

    if (!!arr) { arr.forEach((el) => this.push(el)); }
  }

  push(item) {
    const prevHead = this.head;
    this.head = new NodeLL(item);
    this.head.next = prevHead;
    this.length += 1;
  }

  pop() {
    const result = this.head;
    if (!this.isEmpty()) { 
      this.head = this.head.next;
      this.length -= 1;
    }
    return result ? result.value : null;
  }  

  peek() {
    return !this.head ? null : this.head.value;
  }

  isEmpty() {
    return this.head === null;
  }
}

module.exports = Stack;

/* TEST */
// const s = new Stack();
//   s.push('a');
//   s.push('b');
//   s.push('c');
//   console.log(s.length, 3);
//   console.log(s.pop(), 'c');
//   console.log(s.peek(), 'b');
//   console.log(s.pop(), 'b');
//   console.log(s.length, 1);
//   console.log(s.pop(), 'a');
//   console.log(s.isEmpty(), true);
//   console.log(s.pop(), null);
//   console.log(s.length, 0);