const LinkListHash = require('../dataStructures/LinkListHash');

class LRUCache {
  constructor(maxSize = 3) {
    this.maxSize = maxSize;
    this.linkListHash = new LinkListHash();
  }
  
  get(key) {
    const val = this.linkListHash.get(key);
    this.linkListHash.moveToEnd(key);

    return val || null;
  }

  set(key, val) {
    if (this._isMaxSize()) { this.linkListHash.shift(); }
    this.linkListHash.set(key, val);
  }

  getRecent() { return this.linkListHash.tail.value; }

  getStore() {
    // return this.linkListHash.getStore();
    const store = {};
    this.linkListHash.forEach((el) => {
      console.log(el.value.key, el.value.val);
      // store[el.key] = el.val;
    });
    return store;
  }

  _size() { return this.linkListHash.length(); }

  _isMaxSize() { return this.maxSize === this._size(); }
}


//TESTS

// const myLRUCache = new LRUCache(3);
// myLRUCache.set('a', 1);
// myLRUCache.set('b', 2);
// myLRUCache.set('c', 3);
// // console.log(myLRUCache.getStore(), { a: 1, b: 2, c: 3 });


// myLRUCache.set('d', 4);
// console.log(myLRUCache.getStore(),  { b: 2, c: 3, d: 4 }); // b c d
// myLRUCache.get('b');
// console.log(myLRUCache.getStore(), { c: 3, d: 4, b: 2 }); // c d b
// myLRUCache.set('a', 5);
// console.log(myLRUCache.getStore(), { d: 4, b: 2, a: 5 }); // d b a