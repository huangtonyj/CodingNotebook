function permutations1(array, inPermuation) {
  if (inPermuation && inPermuation.every((el) => el === true)) return [[]];

  const result = [];
  inPermuation = inPermuation || array.map((_) => false);

  for (let i = 0; i < array.length; i++) {
    if (inPermuation[i]) continue;

    const val = array[i];

    inPermuation[i] = true;

    const nextPermuations = permutations1(array, inPermuation);

    for (const perm of nextPermuations) {
      result.push([val, ...perm]);
    }

    inPermuation[i] = false;
  }

  return result;
}

function permutations2(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const nextPerm = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutations2(nextPerm);

    perms.forEach((perm) => {
      result.push([num, ...perm]);
    });
  }

  return result;
}

const permutations = permutations2;
module.exports = permutations;
