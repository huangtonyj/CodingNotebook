const StaticArray = require('./StaticArray');

class DynamicArray {
  constructor() {
    this.store = new StaticArray(8);
    this.capacity = 8;
    this.length = 0;
  }

  get(idx) {
    return this.store.get(idx);
  }

  set(idx, val) {
    return this.store.set(idx, val);
    // if idx is larger than length, previous values = null;
  }

  push(val) {
    if (this.length === this.capacity) this._resize();
    this.store[this.length - 1] = val;
    this.length++;
  }

  pop() {
    if (this.length === 0) throw 'Out of range';
    
    const val = this.store[this.length - 1];
    this.store[this.length - 1] = null;
    return val;
  }
  
  unshift(val) {
    
  }
  
  shift() {

  }

  _resize() {

  }
}

module.exports = DynamicArray;