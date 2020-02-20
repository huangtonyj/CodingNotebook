const maxPathSum = require('../../problems/maxPathSum');

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

describe('maxPathSum()', () => {
  test('Test Case #1', () => {
    const tree = new BinaryTree(1).insert([2, 3]);
    expect(maxPathSum(tree)).toEqual(6);
  });

  test('Test Case #2', () => {
    const tree = new BinaryTree(1).insert([2, -1]);
    expect(maxPathSum(tree)).toEqual(3);
  });

  test('Test Case #3', () => {
    const tree = new BinaryTree(1).insert([-5, 3, 6]);
    expect(maxPathSum(tree)).toEqual(6);
  });

  test('Test Case #4', () => {
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7]);
    expect(maxPathSum(tree)).toEqual(18);
  });

  test('Test Case #5', () => {
    const tree = new BinaryTree(1).insert([-10, -5, 30, 45, -20, -21, 5, 1, 3, -3, 100, 2, 100, 1]);
    expect(maxPathSum(tree)).toEqual(154);
  });

  test('Test Case #6', () => {
    const tree = new BinaryTree(1).insert([-10, -5, 30, 45, -20, -21, 5, 1, 3, -3, 100, 2, 100, 1, 100]);
    expect(maxPathSum(tree)).toEqual(201);
  });

  test('Test Case #7', () => {
    const tree = new BinaryTree(1).insert([-10, -5, 30, 75, -20, -21, 5, 1, 3, -3, 100, 2, 100, 1, 100]);
    expect(maxPathSum(tree)).toEqual(203);
  });

  test('Test Case #8', () => {
    const tree = new BinaryTree(1).insert([
      -150,
      -5,
      30,
      75,
      -20,
      -21,
      5,
      1,
      3,
      -3,
      100,
      2,
      100,
      1,
      100,
      100,
      5,
      10,
      150,
      -8,
    ]);
    expect(maxPathSum(tree)).toEqual(228);
  });

  test('Test Case #9', () => {
    const tree = new BinaryTree(1).insert([
      -150,
      -5,
      30,
      75,
      -20,
      -21,
      5,
      1,
      3,
      -3,
      100,
      2,
      100,
      1,
      100,
      100,
      5,
      10,
      150,
      151,
    ]);
    expect(maxPathSum(tree)).toEqual(304);
  });

  test('Test Case #10', () => {
    const tree = new BinaryTree(1).insert([
      -5,
      -3,
      0,
      2,
      2,
      1,
      -3,
      3,
      1,
      1,
      0,
      5,
      1,
      1,
      0,
      1,
      1,
      -1,
      -1,
      -6,
      -1,
      -100,
      -9,
      -91,
      2,
      1,
      0,
      1,
      -5,
      0,
    ]);
    expect(maxPathSum(tree)).toEqual(9);
  });

  test('Test Case #11', () => {
    const tree = new BinaryTree(1).insert([
      -5,
      -3,
      0,
      2,
      2,
      1,
      -3,
      -4,
      1,
      1,
      0,
      5,
      1,
      1,
      0,
      1,
      10,
      -1,
      -1,
      -6,
      -1,
      -100,
      -9,
      -91,
      2,
      1,
      0,
      1,
      -5,
      0,
    ]);
    expect(maxPathSum(tree)).toEqual(10);
  });

  test('Test Case #12', () => {
    const tree = new BinaryTree(1).insert([
      -5,
      -3,
      0,
      2,
      2,
      1,
      -3,
      -4,
      1,
      1,
      0,
      5,
      1,
      1,
      0,
      1,
      3,
      -1,
      -1,
      -6,
      -1,
      -100,
      -9,
      -91,
      2,
      1,
      0,
      1,
      -5,
      0,
      3,
      1,
      2,
      2,
      7,
      -5,
    ]);
    expect(maxPathSum(tree)).toEqual(10);
  });

  test('Test Case #13', () => {
    const tree = new BinaryTree(1).insert([
      -5,
      -3,
      0,
      2,
      2,
      1,
      -3,
      3,
      1,
      1,
      0,
      5,
      1,
      1,
      0,
      1,
      1,
      -1,
      -1,
      -6,
      -1,
      -100,
      -9,
      -91,
      2,
      1,
      0,
      1,
      5,
      0,
    ]);
    expect(maxPathSum(tree)).toEqual(13);
  });
});