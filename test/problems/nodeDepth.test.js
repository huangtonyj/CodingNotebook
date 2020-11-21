const NodeBT = require('../../dataStructures/NodeBT');
const nodeDepth = require('../../problems/nodeDepth');


it('Test Case #1', function () {
  const root = new NodeBT(1);
    root.left = new NodeBT(2);
    root.left.left = new NodeBT(4);
    root.left.left.left = new NodeBT(8);
    root.left.left.right = new NodeBT(9);
    root.left.right = new NodeBT(5);
    root.right = new NodeBT(3);
    root.right.left = new NodeBT(6);
    root.right.right = new NodeBT(7);

  const actual = nodeDepth(root);
  expect(actual).toEqual(16);
});
