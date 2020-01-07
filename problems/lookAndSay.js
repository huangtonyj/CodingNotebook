function lookAndSay(n) {
  let ans = [1];

  for (let i = 1; i < n; i++) {
    console.log(ans.join(''));
    ans = getNextAns(ans);
  }

  return parseInt(ans.join(''));
}

const getNextAns = (arr) => {
  let ans = [];
  let currentNum = arr[0];
  let currentCount = 1;

  for (let i = 1; i < arr.length; i++) {
    const thisNum = arr[i];

    if (thisNum === currentNum) {
      currentCount++;
    } else {
      ans = ans.concat([currentCount, currentNum]);
      currentNum = thisNum;
      currentCount = 1;
    }
  }

  return ans.concat([currentCount, currentNum]);
};

module.exports = lookAndSay;