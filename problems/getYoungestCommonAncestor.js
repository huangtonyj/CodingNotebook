function getYoungestCommonAncestor(topAncestor, descendant1, descendant2) {
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

module.exports = getYoungestCommonAncestor;
