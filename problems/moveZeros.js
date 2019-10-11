function moveZeros(arr) {
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

console.log(moveZeros([0, 1, 0, 3, 12]), '[1, 3, 12, 0, 0]');