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
    return this.stack.length === 0
  }
  
  min() {
    return this.isEmpty() ? null : this.minStack[this.minStack.length - 1];
  }

  max() {
    return this.isEmpty() ? null : this.maxStack[this.maxStack.length - 1];
  }
  
  push(el) {
    (el <= this.min() || this.isEmpty()) ? this.minStack.push(el) : null;
    (el >= this.max() || this.isEmpty()) ? this.maxStack.push(el) : null;
    this.stack.push(el);
    // console.log(this);
  }
  
  pop() {
    let result = this.stack.pop();
    result === this.min() ? this.minStack.pop() : null;
    result === this.max() ? this.maxStack.pop() : null;
    // console.log(this);
    return result;
  }

}

// let myMinMaxStack = new MinMaxStack();
//   myMinMaxStack.push(1);
//   myMinMaxStack.push(2);
//   myMinMaxStack.push(3);
//   myMinMaxStack.push(4);
//   myMinMaxStack.push(3);
//   myMinMaxStack.push(0);
//   console.log(myMinMaxStack.pop());
//   console.log(myMinMaxStack.pop());
//   console.log(myMinMaxStack.pop());

// let myMinMaxStack2 = new MinMaxStack([1, 0, 2, 5, 4, 8]);