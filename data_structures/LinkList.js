const NodeLLDouble = require('./NodeLLDouble');

class LinkList {
  constructor(arr) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (arr) { arr.forEach((el) => this.push(el)); }
  }

  push(item) {
    if (!this.isEmpty()) {
      const newNode = new NodeLLDouble(item);
      const oldNode = this.tail;

      this.tail = newNode;
      oldNode.next = newNode;
      newNode.prev = oldNode;      
    } else {
      this.head = new NodeLLDouble(item);
      this.tail = this.head;
    }

    this.length += 1;
    // console.log(this.arrayify());
  }
  
  pop() {
    const result = this.tail;

    if (this.length > 1) {
      this.tail = result.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length -= 1;

    return result ? result.value : null;
  }

  unshift(item) {
    if (!this.isEmpty()) {
      const newNode = new NodeLLDouble(item);
      const oldNode = this.head;
      
      this.head = newNode;
      this.head.next = oldNode;
      oldNode.prev = newNode;
    } else {
      this.head = new NodeLLDouble(item);
      this.tail = this.head;
    }
    this.length += 1;
  }

  shift() {
    const result = this.head;

    if (this.length > 1) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length -= 1;
    return result ? result.value : null;
  }

  head() {
    return this.head.value;
  }

  tail() {
    return this.tail.value;
  }

  isEmpty() {
    return this.head === null;
  }

  arrayify() {    
    const arr = [];
    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {      
      arr.push(currentNode.value);
      currentNode = currentNode.next;  
    }

    return arr;
  }

  arrayifyReverse() {    
    const arr = [];
    let currentNode = this.tail;

    for (let i = 0; i < this.length; i++) {      
      arr.push(currentNode.value);
      currentNode = currentNode.prev;  
    }

    return arr;
  }

  find(target) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {      
      if (currentNode.value == target) { return i; }
      currentNode = currentNode.next;
    }
    return -1;
  }

}

module.exports = LinkList;

// const myLL = new LinkList();
//   myLL.push(1);
//   myLL.push(2);
//   myLL.push(3);
//   console.log(myLL.arrayify());
//   console.log(myLL.arrayifyReverse());
  
//   myLL.unshift(0);
//   console.log(myLL.arrayify());
//   console.log(myLL.arrayifyReverse());

//   console.log(myLL.pop());
//   console.log(myLL.pop());
//   console.log(myLL.pop());
//   console.log(myLL.pop());
//   console.log(myLL.arrayify());
//   console.log(myLL.arrayifyReverse());

//   console.log(myLL.shift());
//   console.log(myLL.shift());
//   console.log(myLL.shift());
//   console.log(myLL.shift());
//   console.log(myLL.arrayify());
//   console.log(myLL.arrayifyReverse());

// const myLL2 = new LinkList([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
//   console.log(myLL2.arrayify());
//   console.log(myLL2.find(2), 7);
