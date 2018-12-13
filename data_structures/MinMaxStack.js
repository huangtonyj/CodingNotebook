class MinMaxStack {
  constructor(arr) {
    this.store = [];
    this.maxStore = [];
    this.minStore = [];

    if (arr) {arr.forEach((el) => this.push(el))}
  }

  peek() {
    return this.store[this.store.length - 1];
  }

  size() {
    return this.store.length;
  }

  isEmpty() {
    return this.store.length === 0
  }
  
  min() {
    return this.isEmpty() ? null : this.minStore[this.minStore.length - 1];
  }

  max() {
    return this.isEmpty() ? null : this.maxStore[this.maxStore.length - 1];
  }
  
  pop() {
    let result = this.store.pop();
    result === this.min() ? this.minStore.pop() : null;
    result === this.max() ? this.maxStore.pop() : null;
    // console.log(this);
    return result;
  }
  
  push(el) {
    (el <= this.min() || this.isEmpty()) ? this.minStore.push(el) : null;
    (el >= this.max() || this.isEmpty()) ? this.maxStore.push(el) : null;
    this.store.push(el);
    // console.log(this);
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