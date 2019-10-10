const NodeLLDouble = require('./NodeLLDouble');

class LinkListHash {
  constructor(arr) {
    this.store = {};
    
    this.head = null;
    this.tail = null;

    this.length = 0;

    if (arr) { arr.forEach((el) => this.set(el.key, el.val)); }
  }

  set(key, val) { // register node to store and append to end of LL
    const item = {key, val};

    if (this.store[key]) { this.delete(key); } // delete old node if exist
    
    const newNode = new NodeLLDouble(item);
    
    this.store[key] = newNode;
  
    if (this._isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const prevTail = this.tail;

      this.tail = newNode;
      prevTail.next = newNode;
      this.tail.prev = prevTail;
    }

    this.length += 1;

    return this;
  }

  get(key) {
    return this.store[key].value.val;
  }

  delete(key) { // delete key from LinkListHash
    const targetNode = this.store[key];

    if (!targetNode) return;
    
    if (this._isHeadNode(targetNode) && this._isTailNode(targetNode)) {
      this.head = null;
      this.tail = null;
    } else if (this._isHeadNode(targetNode)) {
      this.head = targetNode.next;
      this.head.prev = null;
    } else if (this._isTailNode(targetNode)) {
      this.tail = targetNode.prev;
      this.tail.next = null;
    } else { 
      targetNode.prev.next = targetNode.next; 
      targetNode.next.prev = targetNode.prev;
    }

    delete this.store[key];

    this.length -= 1;

    return this;
  }

  shift() { // delete last node
    this.delete(this.tail.value.key);
  }

  unshift() { // delete first node
    this.delete(this.head.value.key);
  }

  forEach(fn) {
    let currentNode = this.head;

    while(currentNode) {
      fn(currentNode);
      currentNode = currentNode.next;
    }
    // TODO: something wrong with forEach. Can't return each to be manipulated;
  }

  getStore() {
    // TODO: forEach not working as expected.
    console.log('LinkListHash.getStore() was called');
    const store = {};
    this.forEach.call((el) => {
      store[el.key] = el.val;
    });
    console.log('LinkListHash.getStore().store: ', store);
    return store;
  }

  _isEmpty() { return this.length === 0; }

  _isHeadNode(node) { return this.head === node; }

  _isTailNode(node) { return this.tail === node; }
}

module.exports = LinkListHash;

// TESTS


// const arr = [
//   {key: 'a', val: 1},
//   {key: 'b', val: 2},
//   {key: 'c', val: 3}
// ];

// const myLinkListHash = new LinkListHash(arr);
// myLinkListHash.set('d', 4);
// myLinkListHash.set('c', 5);
// myLinkListHash.set('c', 6);
// myLinkListHash.unshift();
// myLinkListHash.delete('b');
// myLinkListHash.delete('c');
// // myLinkListHash.delete('d');

// console.log('myLinkListHash.store: ', myLinkListHash.store);
// console.log('---------------------------');
// console.log('---------------------------');
// console.log('---------------------------');
// myLinkListHash.forEach((node) => console.log(node.value));

// console.log('myLinkListHash: ', myLinkListHash);
// // console.log(myLinkListHash.get('d'));
// // edge case if 1 node left that is the head and tail node.
// myLinkListHash.set('d', 14);


// myLinkListHash.forEach((node) => console.log(node.value));

// console.log(myLinkListHash.getStore());