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
    
    this.set(this.length - 1, val);
    this.length++;
    return this;
  }
  
  pop() {
    if (this.length === 0) throw 'Out of range';
    
    const val = this.get(this.length - 1);
    this.set(this.length - 1, null);
    this.length--;
    return val;
  }
  
  unshift(val) {
    if (this.length === this.capacity) this._resize();
    
    for (let i = this.length; i > 0; i--) {
      this.set(i, this.get(i - 1));
    }
    
    this.set(0, val);
    this.length++;

    return this;
  }
  
  shift() {
    if (this.length === 0) throw 'Out of range';
    const val = this.get(0);

    for (let i = 0; i < this.length - 1; i++) {
      this.set(i, this.get(i + 1));
    }

    this.length--;
    
    return val;
  }

  _resize() {
    const newStore = new StaticArray(this.capacity * 2);
    for (let i = 0; i < this.length; i++) {
      newStore.set(i, this.get(i));
    }
    this.capacity *= 2;
    this.store = newStore;
  }
}

module.exports = DynamicArray;