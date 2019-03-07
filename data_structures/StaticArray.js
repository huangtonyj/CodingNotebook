class StaticArray {
  constructor(capacity = 8) {
    this.store = new Array(capacity);
    this.capacity = capacity;
  }
  
  get(idx) {
    this._checkBoundary(idx);
    return this.store[idx];
  }
  
  set(idx, val) {
    this._checkBoundary(idx);
    this.store[idx] = val;
    return val;
  }
  
  _checkBoundary(idx) {
    if (idx >= this.capacity) { throw 'Out of range'; }
  }
}

module.exports = StaticArray;