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

module.exports = moveZeros;