class BST {
  constructor(value, parent = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;

    return this;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value, this);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value, this);
      } else {
        this.right.insert(value);
      }
    }

    return this;
  }

  contains(value) {
    if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    }

    return value === this.value;
  }

  // remove(value) {
  //   console.log('TBD');
    
        // Switch (number of children)
        // 0: plain delete
        // 1: promote that one child
        // 2: more complicated logic

  //   return this;
  // }
  
  min() {
    return this.left ? this.left.min() : this.value;
  }
  
  max() {
    return this.right ? this.right.max() : this.value;
  }

  _isLeafNode() {
    return !this.left && !this.right;
  }

  _leftMostNode() {
    return this.left ? this.left._leftMostNode() : this;
  }

  _rightMostNode() {
    return this.right ? this.right._rightMostNode() : this;
  }

  _parentParent() {
    return this.parent ? this.parent._parentParent() : this;
  }
}

module.exports = BST;