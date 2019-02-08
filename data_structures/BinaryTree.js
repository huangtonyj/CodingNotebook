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


  
}

const myBinaryTree = new BinaryTree(1);
  myBinaryTree.insert(2);
  myBinaryTree.insert(3);
  myBinaryTree.insert(4);
  myBinaryTree.insert(5);
  myBinaryTree.insert(6);
  myBinaryTree.insert(7);

console.log(myBinaryTree);
console.log(myBinaryTree.size());
