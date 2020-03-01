function minRewards(arr) {

  const result = arr.map(_ => 1);

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i- 1];
    const current = arr[i];

    if (current > prev) result[i] = result[i - 1] + 1;
  }
  
  for (let i = arr.length - 2; i >= 0; i--) {
    const prev = arr[i + 1];
    const current = arr[i];
  
    if (current > prev) result[i] = result[i + 1] + 1;
  }

  return result;

  // ****************************************************

  // const result = new Array(arr.length).fill(1);

  // let increment = 1;
  // let counter = 0;
  // let i = 0;

  // while (counter < arr.length * 2) {

  //   const current = arr[i];
  //   const currentPay = result[i];

  //   const next = arr[i + increment];
  //   const nextPay = result[i + increment];

  //   if (current > next && currentPay <= nextPay) {
  //     result[i] = currentPay + 1;
  //     counter = 0;
  //   } else {
  //     counter++;
  //   }

  //   if (i === 0) { increment = 1; }
  //   if (i === arr.length - 1) { increment = -1; }

  //   i = i + increment;
  // }

  // return result;
  // return result.reduce((acc, el) => acc + el);

  // ****************************************************

  // const dirs = [];

  // for (let i = 1; i < arr.length; i++) {
  //   const prev = arr[i - 1];
  //   const current = arr[i];

  //   if (current > prev) dirs.push(1);
  //   if (current < prev) dirs.push(-1);
  //   if (current === prev) dirs.push(0);
  // }

  // return dirs;

  // let downCounter = 0;

  // let nextDirIdx = 0;
  // let nextDir = dirs[nextDirIdx];

  // while (nextDir === -1) {
  //   downCounter++;
  //   nextDirIdx++;
  //   nextDir = dirs[nextDirIdx];
  // }

  // const result = [downCounter + 1];
  // let prev = downCounter + 1;

  // dirs.forEach((dir) => {
  //   result.push(prev + dir);
  //   prev = prev + dir;
  // });
  
  // return result;
  
  // ****************************************************
  
  // const dirs = [];

  // for (let i = 1; i < arr.length; i++) {
  //   const prev = arr[i - 1];
  //   const current = arr[i];

  //   if (current > prev) dirs.push(1);
  //   if (current < prev) dirs.push(-1);
  //   if (current === prev) dirs.push(0);
  // }

  // // return dirs;

  // const result = [1];
  // let prev = 1;

  // for (let i = 0; i < dirs.length; i++) {
  //   const currentDir = dirs[i];

  //   if (currentDir === 1) {
  //     prev = prev + currentDir;
  //     result.push(prev);
  //   } else {
  //     result.push(0);
  //   }
  // }
  
  // prev = 0;

  // for (let i = dirs.length - 1; i > 0; i--) {
  //   const currentDir = dirs[i];

  //   if (currentDir === -1) {
  //     prev = prev - currentDir;
  //     result[i + 1] = prev;
  //   } else {
  //     prev = 0;
  //   }
  // }

  // return result;

}

console.log(minRewards([1]), [1]);
console.log(minRewards([5, 10]), [1, 2]);
console.log(minRewards([4, 2, 1, 3]), [3, 2, 1, 2]);
console.log(minRewards([10, 40, 200, 1000, 60, 30]), [1, 2, 3, 4, 2, 1]);

module.exports = minRewards;