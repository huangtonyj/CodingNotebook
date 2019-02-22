class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 1;
    
    return this;
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

    this.size++;

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

}

//       4
//     /   \
//    2     6
//  /  \   / \
// 1    3 5   7
const myBST = new BST(4)
  .insert(2).insert(6)
  .insert(1).insert(3).insert(5).insert(7);

// console.log(myBST);
console.log(myBST.size, 7);
console.log(myBST.contains(1), true);
console.log(myBST.contains(4), true);
console.log(myBST.contains(7), true);
console.log(myBST.contains(0), false);
console.log(myBST.contains(8), false);
console.log(myBST.min(), 1);
console.log(myBST.max(), 7);