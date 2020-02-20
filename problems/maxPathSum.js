function maxPathSum(tree, hasParent = false) {
  if (!tree) return [0, 0];

  const [leftClose, leftOpen] = maxPathSum(tree.left, true);
  const [rightClose, rightOpen] = maxPathSum(tree.right, true);

  const currentClose = leftOpen + tree.value + rightOpen;
  
  const maxOpen = tree.value + Math.max(leftOpen, rightOpen);
  const maxClose = Math.max(leftClose, currentClose, rightClose, maxOpen);

  if (hasParent) {
    return [maxClose, maxOpen];
  } else {
    return Math.max(maxClose, maxOpen, leftOpen, leftClose);
  } 
}

module.exports = maxPathSum;

/*
  Notes:
  An open path means it can connect with the parent and the parent's left/right.abs
  A close path means it has formed a upside down V and cannot connect further.
*/