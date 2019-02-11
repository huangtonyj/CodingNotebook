const NodeLLDouble = require('../data_structures/NodeLLDouble');

class LRUCache {
  constructor(maxSize = 1) {
    this.maxSize = maxSize;
    this.size = 0;
    this.cache = {};
    this.LRU = new NodeLLDouble();
  }

  insertKeyValuePair(key, value) {
    // Write your code here.
  }

  getValueFromKey(key) {
    // Write your code here.
  }

  getMostRecentKey() {
    // Write your code here.
  }
}