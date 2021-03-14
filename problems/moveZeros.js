// O(n) time O(1) space
function moveZeros(arr) {
  let zeroPointer = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num !== 0) {
      [arr[zeroPointer], arr[i]] = [arr[i], arr[zeroPointer]]; // swap
      zeroPointer++;
    }
  }

  return arr;
}

// O(n) time O(n) space
function moveZeros1(arr) {
  let zerosCount = 0;
  const result = [];

  arr.forEach((el) => {
    if (el === 0) {
      zerosCount++;
    } else {
      result.push(el);
    }
  });

  for (let i = 0; i < zerosCount; i++) {
    result.push(0);
  }

  return result;
}

module.exports = moveZeros;