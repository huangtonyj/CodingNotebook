// A Queue made of two stacks (in and out)
// O(1) insert
// Amortized O(1) removal

class StackQueue {
  constructor() {
    this.in_stack = [];
    this.out_stack = [];
  }

  add(value) {
    this.in_stack.push(value);
  }

  remove() {
    if (this.out_stack.length === 0) { this.pourOver(); }
    return this.out_stack.pop();
  }

  peek() {
    return this.out_stack > 0 ? this.out_stack[0] : this.in_stack[this.in_stack.length - 1];
  }

  pourOver() {
    while(this.in_stack.length > 0) {
      this.out_stack.push(this.in_stack.pop());
    }
  }
}

module.exports = StackQueue;