const {branchSums, BinaryTree} = require('../../problems/branchSum');

class BinaryTree1 extends BinaryTree {
  constructor(value) {
    super(value);
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree1(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree1(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

describe('branchSums()', () => {
  test('Test Case #1', () => {
    const tree = new BinaryTree1(1);
    expect(branchSums(tree)).toEqual([1]);
  });

  test('Test Case #2', () => {
    const tree = new BinaryTree1(1).insert([2]);
    expect(branchSums(tree)).toEqual([3]);
  });

  test('Test Case #3', () => {
    const tree = new BinaryTree1(1).insert([2, 3]);
    expect(branchSums(tree)).toEqual([3, 4]);
  });

  test('Test Case #4', () => {
    const tree = new BinaryTree1(1).insert([2, 3, 4, 5]);
    expect(branchSums(tree)).toEqual([7, 8, 4]);
  });
  1
  23
  45

  test('Test Case #5', () => {
    const tree = new BinaryTree1(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(branchSums(tree)).toEqual([15, 16, 18, 10, 11]);
  });

  test('Test Case #6', () => {
    const tree = new BinaryTree1(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1]);
    expect(branchSums(tree))
      .toEqual([15, 16, 18, 9, 11, 11, 11]);
  });

  test('Test Case #7', () => {
    const tree = new BinaryTree1(0);
    tree.left = new BinaryTree1(1);
    tree.left.left = new BinaryTree1(10);
    tree.left.left.left = new BinaryTree1(100);
    expect(branchSums(tree)).toEqual([111]);
  });

  test('Test Case #8', () => {
    const tree = new BinaryTree1(0);
    tree.right = new BinaryTree1(1);
    tree.right.right = new BinaryTree1(10);
    tree.right.right.right = new BinaryTree1(100);
    expect(branchSums(tree)).toEqual([111]);
  });

  test('Test Case #9', () => {
    const tree = new BinaryTree1(0);
    tree.left = new BinaryTree1(9);
    tree.right = new BinaryTree1(1);
    tree.right.left = new BinaryTree1(15);
    tree.right.right = new BinaryTree1(10);
    tree.right.right.left = new BinaryTree1(100);
    tree.right.right.right = new BinaryTree1(200);
    expect(branchSums(tree)).toEqual([9, 16, 111, 211]);
  });  
});
