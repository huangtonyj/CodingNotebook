const NodeLLDouble = require('./NodeLLDouble');

class LinkList {
  constructor(arr) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (arr) { arr.forEach((el) => this.push(el)); }
  }

  push(item) {
    const newNode = new NodeLLDouble(item);
    
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;      
    } else {
      const prevTail = this.tail;

      this.tail = newNode;
      prevTail.next = newNode;
      this.tail.prev = prevTail;
    }

    this.length += 1;

    return newNode;
  }
  
  pop() {
    return this.delete(this.tail) || null;
  }

  unshift(item) {
    const newNode = new NodeLLDouble(item);
    
    if (this.isEmpty()) {  
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevHead = this.head;

      this.head = newNode;
      prevHead.prev = newNode;
      this.head.next = prevHead;
    }

    this.length += 1;

    return newNode;
  }

  shift() {
    return this.delete(this.head) || null;
  }

  delete(node) {
    if (this.isHead(node) && this.isTail(node)) {
      this.head = null;
      this.tail = null;
    } else if (this.isHead(node)) {
      this.head = node.next;
      this.head.prev = null;
    } else if (this.isTail(node)) {
      this.tail = node.prev;
      this.tail.next = null;
    } else { 
      if (node.prev) {
        node.prev.next = node.next; 
        node.prev = null;
      }
      if (node.next) {
        node.next.prev = node.prev;
        node.next = null;
      }
    }

    this.length -= 1;

    return node;
  }

  moveToTail(node) {
    if (this.isTail(node)) { return; } 
    
    if (this.isHead(node)) {
      this.head = this.head.next;
      this.head.prev = null;
    }

    const prevTail = this.tail;

    prevTail.next = node;
    this.tail = node;
    this.tail.prev = prevTail;
    this.tail.next = null;
  }

  moveToHead(node) {
    if (this.isHead(node)) { return; } 
    
    if (this.isTail(node)) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    const prevHead = this.head;

    prevHead.prev = node;
    this.head = node;
    this.head.prev = null;
    this.head.next = prevHead;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  isHead(node) {
    return this.head === node;
  }
  
  isTail(node) {
    return this.tail === node;
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

  forEach(cbFn) {
    // TODO
    let currentNode = this.head;

    while (currentNode) {
      cbFn(currentNode);
      currentNode = currentNode.next;
    }
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

  // console.log(myLL.shift());
//   console.log(myLL.shift());
//   console.log(myLL.shift());
//   console.log(myLL.shift());
  // console.log(myLL.arrayify());
//   console.log(myLL.arrayifyReverse());

// const myLL2 = new LinkList([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
//   console.log(myLL2.arrayify());
//   console.log(myLL2.find(2), 7);
