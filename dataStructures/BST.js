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

  remove(value) {
	 if (this.left && value < this.value) {
      return this.left.remove(value);
    } else if (this.right && value > this.value) {
      return this.right.remove(value);
    }

    if (this._isLeafNode()) {
      

      if (!this.parent) {
        return;
      } else if (this.value < this.parent.value) {
        this.parent.left = null;
      } else if (this.value >= this.parent.value) {
        this.parent.right = this.right || null;
      }
    } else if (this.right) {

      const next = this.right._leftMostNode();
      if (next.value < next.parent.value) {
        next.parent.left = next.left; // no
      } else {
        next.parent.right = next.right;
      }

      this.value = next.value;
      next.parent = this.parent;

    } else if (this.left) {
      const next = this.right ? this.right._leftMostNode() : this._leftMostNode();
      
      if (next.value < next.parent.value) {
        next.parent.left = next.left; // no
      } else {
        next.parent.right = next.right;
      }

      this.value = next.value;
      next.parent = this.parent;
      
    }

    return this._parentParent();
  }
  
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