Array.prototype.myReduce = function (fn, acc = 0) {
  this.forEach(el => {
    acc = fn(acc, el);
  });

  return acc;
};

const summationFn = (a, b) => a + b;

console.log(
  [1, 2, 3].myReduce(summationFn), 6
);