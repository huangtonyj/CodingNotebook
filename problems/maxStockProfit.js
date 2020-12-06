/*
  Given a array of numbers representing the stock prices of a company in chronological order, 
  write a function that calculates the maximum profit you could have made from buying and selling that stock once. 
  You must buy before you can sell it.

  For example, given [9, 11, 8, 5, 7, 10], 
  you should return 5, 
  since you could buy the stock at 5 dollars and sell it at 10 dollars.
*/

function maxStockProfit(prices) {

  let bestProfit = -Infinity;
  let currentMin = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice > currentMin) bestProfit = Math.min(currentPrice - currentMin);
    
    currentMin = Math.min(currentMin, currentPrice);
  }

  return bestProfit;

}

console.log(
  maxStockProfit([9, 11, 8, 5, 7, 10]) === 5
);