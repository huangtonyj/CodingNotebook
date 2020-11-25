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
  }
}

function minHeightBST(array) {
  const queue = [array];
  let root;

  while (queue.length) {
    const current = queue.pop();

    const midIdx = Math.floor(current.length / 2);
    const left = current.slice(0, midIdx);
    const right = current.slice(midIdx + 1);
    const mid = current[midIdx];

    if (!root) {
      root = new BST(mid);
    } else {
      root.insert(mid);
    }

    if (left.length) queue.push(left);
    if (right.length) queue.push(right);
  }

  return root;
}

module.exports = minHeightBST;