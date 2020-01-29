function paranthesesCombo(n) {
  let result = [];
  let queue = [{
    val: '(',
    openCount: 1,
    closeCount: 0
  }];

  while (queue.length) {
    const current = queue.shift();
    const addOpen = append(current, '(');
    const addClose = append(current, ')');

    if (addOpen.openCount <= n) queue.push(addOpen);
    if (addClose.openCount >= addClose.closeCount) queue.push(addClose);

    if (addClose.openCount === n && addClose.closeCount === n) result.push(addClose);
  }

  return result.map(el => el.val);
}

const append = (obj, char) => {
  const val = obj.val + char;
  const openCount = obj.openCount + (char === '(' ? 1: 0);
  const closeCount = obj.closeCount + (char === ')' ? 1: 0);
  return {val, openCount, closeCount};
};

module.exports = paranthesesCombo;