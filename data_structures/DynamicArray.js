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
    
    this.store.set(this.length - 1, val);
    this.length++;
    return this;
  }
  
  pop() {
    if (this.length === 0) throw 'Out of range';
    
    const val = this.store.get(this.length - 1);
    this.store.set(this.length - 1, null);
    this.length--;
    return val;
  }
  
  unshift(val) {
    if (this.length === this.capacity) this._resize();
    
    for (let i = this.length; i > 0; i--) {
      this.store.set(i, this.store.get(i - 1));
    }
    
    this.store.set(0, val);
    this.length++;
    
    return this;
  }
  
  shift() {
    if (this.length === 0) throw 'Out of range';
    const val = this.store.get(0);

    for (let i = 0; i < this.length - 1; i++) {
      this.store.set(i, this.store.get(i + 1));
    }

    this.length--;
    
    return val;
  }

  _resize() {
    const newStore = new StaticArray(this.capacity * 2);
    for (let i = 0; i < this.length; i++) {
      newStore.set(i, this.store.get(i));
    }
    this.capacity *= 2;
    this.store = newStore;
  }
}

module.exports = DynamicArray;