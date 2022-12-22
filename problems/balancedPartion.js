class Bucket {
  constructor() {
    this.bucket = []; // binary tree?
    this.sum = 0;
  }

  add(el) {
    this.bucket.push(el);
    this.sum += el;
  }

  removeClosestElementTo(target) {
    const [closestIndex, closestValue] = this._findClosestElementIndexTo(target);
    this._remove(closestIndex);
    this.sum -= closestValue;

    console.table({closestIndex, closestValue})

    return closestValue;
  }

  _findClosestElementIndexTo(target) {
    let closestIndex = 0;
    let closestDiff = Infinity;

    this.bucket.forEach((el, index) => {
      const currentDiff = Math.abs(el - target);
      if (currentDiff < closestDiff) {
        closestDiff = currentDiff;
        closestIndex = index; 
      }
    })

    return [closestIndex, this.bucket[closestIndex]]
  }

  _remove(index) {
    this.bucket.splice(index, 1);
    console.log(this.bucket)
  }
}

function balancedPartion(arr) {
  const sum = arr.reduce((acc, el) => acc + el);
  const bucket1 = new Bucket();
  const bucket2 = new Bucket();

  if (sum % 2 !== 0) return false;

  // attempt to split and balance both sets
  arr.forEach(el => {
    if (bucket1.sum < bucket2.sum) {
      bucket1.add(el);
    } else {
      bucket2.add(el);
    }
  })

  // do it up to arr ** 2 times or till bucket sum is balanced
  // take closest diff el from larger bucket to smaller bucket
  i = arr.length ** 2 / 2
  while (bucket1.sum !== bucket2.sum && i > 0) {
    const diff = (bucket1.sum - bucket2.sum) / 2;

    console.log(bucket1, bucket2)

    if (diff > 0) {
      bucket2.add(bucket1.removeClosestElementTo(diff))
    } else {
      bucket1.add(bucket2.removeClosestElementTo(diff))
    }

    i--;
  }

  return bucket1.sum === bucket2.sum ? [bucket1, bucket2] : false
}

console.log(balancedPartion([15, 5, 20, 10, 35, 15, 10]))