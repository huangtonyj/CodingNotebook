function findClosestValueInBst(tree, target, closest = Infinity) {
  if (!tree) return closest;
  
  if (Math.abs(tree.value - target) < Math.abs(target - closest)) { 
    closest = tree.value; 
  }

  if (target > tree.value) {
    closest = findClosestValueInBst(tree.right, target, closest);
  } else if (target < tree.value) {
    closest = findClosestValueInBst(tree.left, target, closest);
  }

  return closest;
}

module.exports = findClosestValueInBst;
