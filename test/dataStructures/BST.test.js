const BST = require('../../dataStructures/BST');

describe('BST:', () => {

  //       4
  //     /   \
  //    2     6
  //  /  \   / \
  // 1    3 5   7
  const myBST = new BST(4)
    .insert(2).insert(6)
    .insert(1).insert(3).insert(5).insert(7);

  //         10
  //       /   \
  //       5     15
  //     /  \   / \
  //   2    5 13  22
  //   /         \
  // 1           14
  const myBST2 = new BST(10)
    .insert(5).insert(15)
    .insert(2).insert(5).insert(13).insert(22)
    .insert(1).insert(14);

  test('contains()', () => {
    expect(myBST.contains(1)).toBeTruthy();
    expect(myBST.contains(4)).toBeTruthy();
    expect(myBST.contains(7)).toBeTruthy();
    expect(myBST.contains(0)).toBeFalsy();
    expect(myBST.contains(8)).toBeFalsy();
  });

  test('min()', () => {
    expect(myBST.max()).toBe(7);
  });

  test('max()', () => {
    expect(myBST.max()).toBe(7);
  });

  test('remove()', () => {
    myBST2.remove(13);
    expect(myBST2.contains(13)).toBeFalsy();
    expect(myBST2.contains(14)).toBeTruthy();
    expect(myBST2.contains(10)).toBeTruthy();
    
    myBST2.remove(10);
    expect(myBST2.contains(10)).toBeFalsy();
    expect(myBST2.contains(15)).toBeTruthy();
    
    myBST2.remove(1);
    expect(myBST2.contains(1)).toBeFalsy();
  
    myBST2.remove(5);
    expect(myBST2.contains(5)).toBeTruthy();
    myBST2.remove(5);
    expect(myBST2.contains(5)).toBeFalsy();
    
    myBST2.remove(2);
    myBST2.remove(15);
    myBST2.remove(22);
    myBST2.remove(14);
  });

});