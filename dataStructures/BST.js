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

    remove2(value, parent = null) {
    if (value < this.value && this.left) {
      this.left.remove(value, this);
    } else if (value > this.value && this.right) {
      this.right.remove(value, this);
    } else {  
      if (this.left && this.right) {
        this.value = this.right.min();
        this.right.remove(this.value, this);
      } else if (!parent) {
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // leaf node
        }
      } else if (parent.left === this) {
        parent.left = this.left ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left ? this.left : this.right;
      } 
   }
   
    return this;
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


// const myBST10 = new BST(10);
//   myBST10
//     .insert(5)
//     .insert(15) 
//     .insert(2)
//     .insert(5)
//     .insert(13)
//     .insert(22)
//     .insert(1)
//     .insert(14)
//     .insert(12)

//     .remove(5)
//     .remove(5)
//     .remove(12)
//     .remove(13)
//     .remove(14)
//     .remove(22)
//     .remove(2)
//     .remove(1)
//     .contains(15)
//   ;

// console.log(
//   '\n\n\n-------------------\n\n\n',
//   myBST10,
//   // myBST10.left,
//   // myBST10.right,
//   // myBST10.left.left._isLeafNode(),
// );

// const myBST4 = new BST(10);
//   myBST4
//     .insert(5)
//     .insert(15)

//     .remove(5)
//     .remove(15)
//     .remove(10)
//   ;

// console.log(
//   '\n\n\n-------------------\n\n\n',
//   myBST4,
//   myBST4.left,
//   myBST4.right,
// );

// const myBST9 = new BST(10);
//   myBST9
//     .insert(5)

//     .remove(10)
//     .contains(15)
//   ;

// console.log(
//   '\n\n\n-------------------\n\n\n',
//   myBST9,
//   myBST9.left,
//   myBST9.right,
// );

// const myBST7 = new BST(1);
//   myBST7
//     .insert(2)
//     .insert(3)
//     .insert(4)

//     .remove(1)
//   ;

// console.log(
//   '\n\n\n-------------------\n\n\n',
    // myBST7,
    // myBST7.left,
    // myBST7.right,
// );


// const myBST2 = new BST(1);
//   myBST2
//     .insert(-2)
//     .insert(-3)
//     .insert(-4)
//   ;

//   myBST2.remove(1);

// console.log(
//   '\n\n\n-------------------\n\n\n',
//   myBST2
// );







// const myBST = new BST(10);
  // myBST
    // .insert(5)
    // .insert(15)
    // .insert(2)
    // .insert(5)
    // .insert(13)
    // .insert(22)
    // .insert(1)
    // .insert(14)
    // .insert(12)
  // ;

//   myBST.remove(15);
//   myBST.remove(5);
//   myBST.remove(10);

// console.log(
//   myBST
// );

  // myBST.remove(10);

// console.log(
//   '\n',
//   myBST.value,
//   '\n\n',
//   myBST.left.value, myBST.right.value,
//   '\n\n',
//   myBST.left.left.value, myBST.left.right.value, myBST.right.left.value, myBST.right.right.value,
//   '\n\n',
//   myBST.left.left.left, 
//   '\n',
//   myBST.right.left.left, 
//   '\n',
//   myBST.right.left.right
// );

// console.log(
//   myBST
// );


