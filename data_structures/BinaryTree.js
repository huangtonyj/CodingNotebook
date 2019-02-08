class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  height() {
    const left = this.left ? this.left.height() : 0;
    const right = this.right ? this.right.height() : 0;

    return 1 + left + right;
  }
  
}

const myBinaryTree = new BinaryTree(1);


console.log(myBinaryTree);
console.log(myBinaryTree.height());
