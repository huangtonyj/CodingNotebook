// ***
/*
  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).


  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. If you're given no
  coins, the minimum amount of change that you can't create is 1.

  Sample Input
  coins = [5, 7, 1, 1, 2, 3, 22]

  Sample Output
  20
*/

function nonConstructibleChange(coins) {
  let currentChange = 0;
  
  coins.sort((a,b) => a - b);

  for (const coin of coins) {
    if (coin > currentChange + 1) return currentChange + 1;
    currentChange += coin;
  }

  return currentChange + 1;
}

module.exports = nonConstructibleChange;

/*
  To understand the trick to this problem, consider the following example:
  coins = [1, 2, 4]. With this set of coins, we can create
  1, 2, 3, 4, 5, 6, 7 cents worth of change. Now, if we were to add
  a coin of value 9 to this set, we would not be able to
  create 8 cents. However, if we were to add a coin of value
  7, we would be able to create 8 cents, and we
  would also be able to create all values of change from 1 to
  15. Why is this the case?
*/