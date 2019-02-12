const NodeLLDouble = require('../data_structures/NodeLLDouble');

class LRUCache {
  constructor(maxSize = 1) {
    this.maxSize = maxSize;
    this.size = 0;
    this.cache = {};
    this.headLL = new NodeLLDouble('dummyHead');
    this.tailLL = this.headLL;
  }

  insertKeyValuePair(key, value) {
    // Write your code here.
    if (this.cache[key]) { delete this.cache[key]; }

    this.tailLL.next = new NodeLLDouble({key, value});
    this.tailLL.next.prev = this.tailLL;
    this.tailLL = this.tailLL.next;

    this.cache[key] = this.tailLL;
  }

  getValueFromKey(key) {
    return this.cache[key] ? this.cache[key] : null;
  }

  getMostRecentKey() {
    return this.tailLL.key;
  }
}