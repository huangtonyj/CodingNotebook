function isValidSubsequence(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    const el1 = arr1[idx1];
    const el2 = arr2[idx2];

    if (el1 === el2) idx2++;

    idx1++;
  }

  return idx2 === arr2.length;
}

console.log(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);