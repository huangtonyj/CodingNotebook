/*
  Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

  Implement the LRUCache class:

  LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
  int get(int key) Return the value of the key if the key exists, otherwise return -1.
  void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
  Follow up:
  Could you do get and put in O(1) time complexity?
*/

class LRUCache {
  constructor(capacity) {
    this.hash = {};
    this.linkList = new LinkList();
    this.capacity = capacity;
  }
  
  get(key) {
    const node = this.hash[key];
    
    if (node) {
      this.linkList.moveToTail(node);
      
      return node.val;
    } else {
      return -1;
    }
  }
  
  put(key, val) {
    const node = this.hash[key];
    
    if (node) {
      node.val = val;
      this.linkList.moveToTail(node);
    } else {
      const newNode = this.linkList.insert(key, val);
      
      this.hash[key] = newNode;
      
      if (this.linkList.length > this.capacity) {
        const removedNode = this.linkList.removeHead();

        delete this.hash[removedNode.key];
      }
    }
    
  }
}

class LinkList {
  constructor() {
    this.head = new Node(null, null, null, null); // dummy head
    this.tail = this.head;
    this.length = 0;
    
    return this;
  }
  
  insert(key, val) {
    this.tail.next = new Node(key, val, this.tail, null);
    this.tail = this.tail.next;
    this.length++;
    
    return this.tail;
  }
  
  remove(node) {    
    const prev = node.prev;
    const next = node.next;
    
    prev.next = next;
    if (next) next.prev = prev;
    
    this.length--;
  }
  
  moveToTail(node) {
    if (this.tail === node) return;
    
    this.remove(node);
    this.length++; // negatate this.remove();
    
    node.prev = this.tail;
    node.next = null;
    
    this.tail.next = node;
    this.tail = node;
  }  
  
  removeHead() {
    const nodeToRemove = this.head.next;
    
    this.head.next = nodeToRemove.next;
    this.head.next.prev = this.head;
    this.length--;
    
    if (nodeToRemove === this.tail) this.tail = this.head;
    
    return nodeToRemove;
  }
}

class Node {
  constructor(key, val, prev, next) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
    
    return this;
  }
}