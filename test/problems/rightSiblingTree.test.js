const NodeBT = require('../../dataStructures/NodeBT');
const rightSiblingTree = require('../../problems/rightSiblingTree');

describe('rightSiblingTree()', () => {

  it('Test Case 1', () => {
    const node1 = new NodeBT(1);
    const node2 = new NodeBT(2);
    const node3 = new NodeBT(3);
    const node4 = new NodeBT(4);
    const node5 = new NodeBT(5);
    const node6 = new NodeBT(6);
    const node7 = new NodeBT(7);
    const node8 = new NodeBT(8);
    const node9 = new NodeBT(9);
    const node10 = new NodeBT(10);
    const node11 = new NodeBT(11);
    const node12 = new NodeBT(12);
    const node13 = new NodeBT(13);
    const node14 = new NodeBT(14);
    
    node1.left = node2;
    node1.right = node3;
    
    node2.left = node4;
    node2.right = node5;
    node3.left = node6;
    node3.right = node7;
    
    node4.left = node8;
    node4.right = node9;
    node5.right = node10;
    node6.left = node11;
    node7.left = node12;
    node7.right = node13;
    
    node11.left = node14;

    rightSiblingTree(node1);

    expect(node1.left).toEqual(node2);
    expect(node2.left).toEqual(node4);
    expect(node3.left).toEqual(node6);
    expect(node6.left).toEqual(node11);
    expect(node7.left).toEqual(node12);
    expect(node12.left).toEqual(null);
    expect(node13.left).toEqual(null);
    expect(node11.left).toEqual(node14);
    expect(node14.left).toEqual(null);
    expect(node4.left).toEqual(node8);
    expect(node5.left).toEqual(null);
    expect(node8.left).toEqual(null);
    expect(node9.left).toEqual(null);

    expect(node1.right).toEqual(null);
    expect(node2.right).toEqual(node3);
    expect(node3.right).toEqual(null);
    expect(node6.right).toEqual(node7);
    expect(node7.right).toEqual(null);
    expect(node12.right).toEqual(node13);
    expect(node13.right).toEqual(null);
    expect(node11.right).toEqual(null);
    expect(node14.right).toEqual(null);
    expect(node4.right).toEqual(node5);
    expect(node5.right).toEqual(node6);
    expect(node8.right).toEqual(node9);
    expect(node9.right).toEqual(null);
  });

});