const BST = require('../../dataStructures/BST');
const isBST = require('../../problems/isBST');

describe('isBST', () => {

  test('Test Case #1', () => {
    const test1 = new BST(10)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22)
      .insert(13)
      .insert(14);
    expect(isBST(test1)).toEqual(true);
  });
  
  test('Test Case #2', () => {
    const test2 = new BST(10)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22)
      .insert(-5)
      .insert(-15)
      .insert(-5)
      .insert(-2)
      .insert(-1)
      .insert(-22);
    expect(isBST(test2)).toEqual(true);
  });
  
  test('Test Case #3', () => {
    const test3 = new BST(10);
    expect(isBST(test3)).toEqual(true);
  });
  
  test('Test Case #4', () => {
    const test4 = new BST(10)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22)
      .insert(500)
      .insert(1500)
      .insert(50)
      .insert(200)
      .insert(10000)
      .insert(2200);
    expect(isBST(test4)).toEqual(true);
  });
  
  test('Test Case #5', () => {
    const test5 = new BST(5000)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22)
      .insert(1)
      .insert(1)
      .insert(3)
      .insert(1)
      .insert(1)
      .insert(502)
      .insert(55000)
      .insert(204)
      .insert(205)
      .insert(207)
      .insert(206)
      .insert(208)
      .insert(203);
    expect(isBST(test5)).toEqual(true);
  });
  
  test('Test Case #6', () => {
    const test6 = new BST(10)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22);
    test6.left.right.right = new BST(11);
    expect(isBST(test6)).toEqual(false);
  });
  
  test('Test Case #7', () => {
    const test7 = new BST(10)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22)
      .insert(-5)
      .insert(-15)
      .insert(-5)
      .insert(-2)
      .insert(-1)
      .insert(-22);
    test7.left.left.left.left.left.left.left = new BST(11);
    expect(isBST(test7)).toEqual(false);
  });
  
  test('Test Case #8', () => {
    const test8 = new BST(10).insert(12);
    test8.left = new BST(11);
    expect(isBST(test8)).toEqual(false);
  });
  
  test('Test Case #9', () => {
    const test9 = new BST(10)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22)
      .insert(500)
      .insert(1500)
      .insert(50)
      .insert(200)
      .insert(10000)
      .insert(2200);
    test9.right.right.right.right.right.right = new BST(9999);
    expect(isBST(test9)).toEqual(false);
  });
  
  test('Test Case #10', () => {
    const test10 = new BST(100)
      .insert(5)
      .insert(15)
      .insert(5)
      .insert(2)
      .insert(1)
      .insert(22)
      .insert(1)
      .insert(1)
      .insert(3)
      .insert(1)
      .insert(1)
      .insert(502)
      .insert(55000)
      .insert(204)
      .insert(205)
      .insert(207)
      .insert(206)
      .insert(208)
      .insert(203);
    test10.right.left.right.left = new BST(300);
    expect(isBST(test10)).toEqual(false);
  });
  
  test('Test Case #11', () => {
    const test11 = new BST(10).insert(5).insert(15);
    test11.left.right = new BST(10);
    expect(isBST(test11)).toEqual(true);
  });

});
