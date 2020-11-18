/*
At a popular bar, each customer has a set of favorite drinks, 
and will happily accept any drink among this set. 
For example, in the following situation, 
customer 0 will be satisfied with drinks 0, 1, 3, or 6.

preferences = {
    0: [0, 1, 3, 6],
    1: [1, 4, 7],
    2: [2, 4, 7, 5],
    3: [3, 2, 5],
    4: [5, 8]
}

A lazy bartender working at this bar is trying to reduce his effort by 
limiting the drink recipes he must memorize. 
Given a dictionary input such as the one above, 
return the fewest number of drinks he must learn in order to satisfy all customers.

For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone.
*/

function lazyBartender(preferences, numOfDrinks) {
  const numOfCustomers = preferences.length;
  const drinksMatrix = [...Array(numOfDrinks)].map(r => Array(numOfCustomers).fill(0));
  let customersSatified = 0;
  let drinksToMake = 0;

  // create drinksMatrix for tallying
  for (const customer in preferences) {
    for (const drink of preferences[customer]) {
      drinksMatrix[drink][customer] = 1;
    }
  }

  while (customersSatified !== numOfCustomers) {
    // Tally up drinks total
    const drinksTally = drinksMatrix.map((drinkArr) => {
      return drinkArr.reduce((total, vote) => total + vote);
    });
    
    const mostPopularDrink = drinksTally.reduce((mostPopular, drinkTotal, drinkIdx) => {
      return drinkTotal > drinksTally[mostPopular] ? drinkIdx : mostPopular;
    }, 0);

    customersSatified += drinksTally[mostPopularDrink];
    
    drinksMatrix[mostPopularDrink] = Array(numOfCustomers).fill(0);

    drinksToMake++;
  }
  
  return drinksToMake;
}

console.log(
  lazyBartender([
    [0, 1, 3, 6],
    [1, 4, 7],
    [2, 4, 7, 5],
    [3, 2, 5],
    [5, 8]
  ], 9) === 2
);