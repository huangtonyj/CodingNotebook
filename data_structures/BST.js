const NodeBT = require('./NodeBT');

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }

    return this;
  }

  contains(value) {


  }

  remove(value) {

    return this;
  }
  
  size(){}
  
  min(){}

  max(){}

}

const myBST = new BST(4);
  myBST
    .insert(2)
    .insert(6)
    .insert(1)
    .insert(3)
    .insert(5)
    .insert(7);

console.log(myBST);
console.log(myBST.contains(1));
console.log(myBST.contains(7));