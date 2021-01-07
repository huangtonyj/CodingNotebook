/*
  You're given an array of positive integers representing the prices of a single stock on
  various days (each index in the array represents a different day). You're also
  given an integer k, which represents the number of transactions
  you're allowed to make. One transaction consists of buying the stock on a
  given day and selling it on another, later day.

  Write a function that returns the maximum profit that you can make by buying
  and selling the stock, given k transactions.

  Note that you can only hold one share of the stock at a time; in other words,
  you can't buy more than one share of the stock on any given day, and you can't
  buy a share of the stock if you're still holding another share. Also, you
  don't need to use all k transactions that you're allowed.

  Sample Input
    prices = [5, 11, 3, 50, 60, 90]
    k = 2

  Sample Output
    93 // Buy: 5, Sell: 11; Buy: 3, Sell: 90
*/

function maxProfitWithKTransactions(prices, k) {
  /*
    traverse prices and track every profit
  */

  const profits = [];
  let prevLow = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    const nextPrice = prices[i + 1] || 0;

    if (currentPrice < prevLow) {
      prevLow = currentPrice;
    } else if (currentPrice > nextPrice) {
      profits.push(currentPrice - prevLow);
      prevLow = Infinity;
    }
  }

  console.log(profits)
  console.log(profits.sort((a,b) => b - a).slice(0, k));

  return profits
    .sort((a,b) => b - a)
    .slice(0, k)
    .reduce((acc, profit) => acc + profit, 0);
}

module.exports = maxProfitWithKTransactions;
