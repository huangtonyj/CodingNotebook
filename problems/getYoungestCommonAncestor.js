// O(d) time O(d) space
function getYoungestCommonAncestor2(topAncestor, descendant1, descendant2) {
  const knownAncestors = new Set();

  let ancestor1 = descendant1;
  let ancestor2 = descendant2;

  while (ancestor1 !== null || ancestor2 !== null) {
    if (ancestor1 === ancestor2) return ancestor1;
    if (knownAncestors.has(ancestor1)) return ancestor1;
    if (knownAncestors.has(ancestor2)) return ancestor2;

    if (ancestor1) {
      knownAncestors.add(ancestor1);
      ancestor1 = ancestor1.ancestor;
    }

    if (ancestor2) {
      knownAncestors.add(ancestor2);
      ancestor2 = ancestor2.ancestor;
    }
  }
}

// O(d) time O(1) space
function getYoungestCommonAncestor(topAncestor, descendant1, descendant2) {
  const depth1 = _getDepth(descendant1, topAncestor);
  const depth2 = _getDepth(descendant2, topAncestor);

  if (depth1 < depth2) {
    return _backTrack(descendant2, descendant1, depth2 - depth1);
  } else {
    return _backTrack(descendant1, descendant2, depth1 - depth2);
  }
}

function _getDepth(descendant, topAncestor) {
  let depth = 0;

  while (descendant.ancestor !== null) {
    depth++;
    descendant = descendant.ancestor;
  }

  return depth;
}

function _backTrack(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }

  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }

  return lowerDescendant;
}

module.exports = getYoungestCommonAncestor;
