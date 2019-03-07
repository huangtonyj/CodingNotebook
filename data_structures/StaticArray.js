class StaticArray {
  constructor(capacity) {
    this.store = new Array(capacity);
    this.capacity = capacity;
  }
  
  get(idx) {
    this.checkBoundary(idx);
    return this.store[idx];
  }
  
  set(idx, val) {
    this.checkBoundary(idx);
    this.store[idx] = val;
    return val;
  }
  
  checkBoundary(idx) {
    if (idx >= this.capacity) { throw 'Out of range'; }
  }
}

module.exports = StaticArray;