class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  size() {
    const left = this.left ? this.left.size() : 0;
    const right = this.right ? this.right.size() : 0;

    return 1 + left + right;
  }

  height() {
    const left = this.left ? this.left.height() : 0;
    const right = this.right ? this.right.height() : 0;

    return 1 + Math.max(left,right);
  }

  insert(value) {
    // method to create a left-first full binary tree;

    // if (!this.left) { 
    //   this.left = new BinaryTree(value); 
    // } else if (!this.right) { 
    //   this.right = new BinaryTree(value); 
    // } else if (this.left.height() === this.right.height() && this.left.size() === this.right.size()) {
    // } else if (this.left.height() === this.right.height()) {
    //   this.left.insert(value);
    // } else {
    //   this.right.insert(value);
    // }

   

    return this;
  }

  contains(value) {
    if (this.value === value) { return this; }

    const left = this.left ? this.left.contains(value) : null;
    const right = this.right ? this.right.contains(value) : null;

    return left || right || null;
  }
  
  isCompleteTree() {
    let left = this.left, right = this.right;

    while (left && right) {
      left = left.left;
      right = right.right;
    }
    
    return left === null && right === null;
  }

}

const myBinaryTree = new BinaryTree(1);
  myBinaryTree.insert(2);
  myBinaryTree.insert(3);
  myBinaryTree.insert(4);
  myBinaryTree.insert(5);
  myBinaryTree.insert(6);
  myBinaryTree.insert(7);


// revisit insert method! logic is not right.


console.log(myBinaryTree);
// console.log(myBinaryTree.size());
// console.log(myBinaryTree.height());
// console.log(myBinaryTree.left.height());
// console.log(myBinaryTree.right.height());

// console.log(myBinaryTree.contains(3));

