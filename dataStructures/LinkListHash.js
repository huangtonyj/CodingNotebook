const LinkList = require('./LinkList');

class LinkListHash {
  constructor(arr) {
    this.Hash = {};
    this.linkList = new LinkList();

    if (arr) { arr.forEach((el) => this.set(el.key, el.val)); }
  }

  set(key, val) { // Append to end of LL and Register node to Hash
    if (this.Hash[key]) { this.delete(key); } // delete old node if exist
    
    this.Hash[key] = this.linkList.push({key, val});

    return this;
  }

  get(key) {
    return this.Hash[key] ? this.Hash[key].value.val : null;
  }

  getNode(key) {
    return this.Hash[key];
  }

  delete(key) { // delete key from linkListHash
    const targetNode = this.Hash[key];
    if (!targetNode) return;

    this.linkList.delete(targetNode);
    delete this.Hash[key];

    return this;
  }

  pop() { // delete newest node
    this.linkList.pop();
  }

  shift() { // delete oldest node
    this.linkList.shift();
  }

  moveToStart(key) {
    const node = this.getNode(key);
    this.linkList.moveToHead(node);
  }

  moveToEnd(key) {
    const node = this.getNode(key);
    this.linkList.moveToTail(node);
  }

  length() {
    return this.linkList.length;
  }

  forEach(cbFn) {
    this.linkList.forEach(cbFn);
  }

  getHash() {
    // TODO: forEach not working as expected.
    console.log('LinkListHash.getHash() was called');
    const hash = {};
    this.forEach.call((el) => {
      hash[el.key] = el.val;
    });
    console.log('LinkListHash.getHash().hash: ', hash);
    return hash;
  }

  isEmpty() { 
    this.linkList.isEmpty(); 
  }
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
// myLinkListHash.pop();
// myLinkListHash.delete('b');
// myLinkListHash.delete('a');
// myLinkListHash.delete('d');
// myLinkListHash.delete('c');

// myLinkListHash.forEach((node) => console.log(node.value));
// console.log('myLinkListHash.hash: ', myLinkListHash.hash);
// console.log('---------------------------');
// console.log('---------------------------');
// console.log('---------------------------');
// myLinkListHash.forEach((node) => console.log(node.value));

// console.log('myLinkListHash: ', myLinkListHash);
// console.log(myLinkListHash.get('d'), 4);
// console.log(myLinkListHash.get('e'), null);

// myLinkListHash.set('d', 14);
// console.log(myLinkListHash.get('d'), 14);
// myLinkListHash.forEach((node) => console.log(node.value));

// console.log(myLinkListHash.getHash());