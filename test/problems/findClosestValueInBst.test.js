const findClosestValueInBst = require('../../problems/findClosestValueInBst');
const BST = require('../../dataStructures/BST');

test('findClosestValueInBst()', () => {

  //         10
  //        /   \
  //       5     15
  //     /  \   / \
  //   2    5 13  22
  //  /         \
  // 1           14
  const myBST = new BST(10)
    .insert(5).insert(15)
    .insert(2).insert(5).insert(13).insert(22)
    .insert(1).insert(14);

  const testBST = new BST(100)
    .insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
    .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502)
    .insert(55000).insert(204).insert(205).insert(207).insert(206)
    .insert(208).insert(203).insert(-51).insert(-403).insert(1001)
    .insert(57).insert(60).insert(4500);

    expect(findClosestValueInBst(myBST, 12)).toEqual(13);
    
    expect(findClosestValueInBst(testBST, 100)).toEqual(100);
    expect(findClosestValueInBst(testBST, 208)).toEqual(208);
    expect(findClosestValueInBst(testBST, 4500)).toEqual(4500);
    expect(findClosestValueInBst(testBST, 4501)).toEqual(4500);
    expect(findClosestValueInBst(testBST, -70)).toEqual(-51);
    expect(findClosestValueInBst(testBST, 2000)).toEqual(1001);
    expect(findClosestValueInBst(testBST, 6)).toEqual(5);
    expect(findClosestValueInBst(testBST, 30000)).toEqual(55000);
    expect(findClosestValueInBst(testBST, -1)).toEqual(1);
    expect(findClosestValueInBst(testBST, 29751)).toEqual(55000);
    expect(findClosestValueInBst(testBST, 29749)).toEqual(4500);

  });
