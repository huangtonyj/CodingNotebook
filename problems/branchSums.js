function branchSums(root, parent = 0) {
  if (root && !root.left && !root.right) return [root.value + parent];

  const left = root.left ? branchSums(root.left, root.value + parent) : [];
  const right = root.right ? branchSums(root.right, root.value + parent) : [];

  return left.concat(right);
}

module.exports = branchSums;