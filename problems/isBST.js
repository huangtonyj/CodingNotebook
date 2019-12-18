function isBST(node, minVal = -Infinity, maxVal = Infinity) {
  if (!node) { return true; }

  return node.value >= minVal 
    && node.value <= maxVal 
    && isBST(node.left, minVal, node.value) 
    && isBST(node.right, node.value, maxVal);
}

module.exports = isBST;