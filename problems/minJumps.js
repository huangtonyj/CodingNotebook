function minJumps(arr) {
  if (arr.length === 1) return 0;

  let ans = Infinity;
  const goal = arr.length - 1;
  const queue = [{
    idx: 0,
    jump: 0
  }];
  
  while (queue.length) {
    const current = queue.pop();
    const nextJump = current.jump + 1;

    for (let i = 1; i <= arr[current.idx]; i++) {
      const nextidx = current.idx + i;

      if (nextidx < goal) {
        queue.push({
          idx: nextidx,
          jump: nextJump
        });
      }

      if (nextidx === goal) ans = Math.min(ans, nextJump);
    }
  }

  return ans;
}

module.exports = minJumps;