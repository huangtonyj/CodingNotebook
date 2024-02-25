function groupAnagrams(arr) {
  const groups = {};

  arr.forEach((str) => {
    const group = str.split("").sort().join("");
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(str);
  });

  return Object.values(groups);
}

module.exports = groupAnagrams;
