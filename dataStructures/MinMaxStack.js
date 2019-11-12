class MinMaxStack {
  constructor(arr) {
    this.stack = [];
    this.maxStack = [];
    this.minStack = [];

    if (arr) {arr.forEach((el) => this.push(el))}
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  length() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
  
  getMin() {
    return this.isEmpty() ? null : this.minStack[this.minStack.length - 1];
  }

  getMax() {
    return this.isEmpty() ? null : this.maxStack[this.maxStack.length - 1];
  }
  
  push(el) {
    if (el <= this.getMin() || this.isEmpty()) { this.minStack.push(el); }
    if (el >= this.getMax() || this.isEmpty()) { this.maxStack.push(el); }
    this.stack.push(el);
  }
  
  pop() {
    let result = this.stack.pop();
    if (result === this.getMin()) { this.minStack.pop(); }
    if (result === this.getMax()) { this.maxStack.pop(); }
    return result;
  }
}

module.exports = MinMaxStack;