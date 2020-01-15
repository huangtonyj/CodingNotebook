function payScale(arr) {

  const result = new Array(arr.length).fill(1);

  let increment = 1;
  let counter = 0;
  let i = 0;

  while (counter < arr.length * 2) {

    const current = arr[i];
    const currentPay = result[i];

    const next = arr[i + increment];
    const nextPay = result[i + increment];

    if (current > next && currentPay <= nextPay) {
      result[i] = currentPay + 1;
      counter = 0;
    } else {
      counter++;
    }

    if (i === 0) { increment = 1; }
    if (i === arr.length - 1) { increment = -1; }

    i = i + increment;
  }

  return result;

}

console.log(payScale([10, 40, 200, 1000, 60, 30]), [1, 2, 3, 4, 2, 1]);