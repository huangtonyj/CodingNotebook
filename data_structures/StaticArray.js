class StaticArray {
  constructor(length) {
    this.store = new Array(length);
    this.length = length;
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
    if (idx >= this.length) { throw 'Out of range'; }
  }
}