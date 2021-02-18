/*
  Change in a Foreign Currency

  You likely know that different currencies have coins and bills of different denominations. 
  In some currencies, it's actually impossible to receive change for a given amount of money. 
  For example, Canada has given up the 1-cent penny. 
  If you're owed 94 cents in Canada, a shopkeeper will graciously supply you with 95 cents instead since there exists a 5-cent coin.
  Given a list of the available denominations, determine if it's possible to receive exact change for an amount of money targetMoney. 
  Both the denominations and target amount will be given in generic units of that currency.

  Signature
    boolean canGetExactChange(int targetMoney, int[] denominations)

  Input
    1 ≤ |denominations| ≤ 100
    1 ≤ denominations[i] ≤ 10,000
    1 ≤ targetMoney ≤ 1,000,000

  Output
    Return true if it's possible to receive exactly targetMoney given the available denominations, and false if not.

  Example 1
    denominations = [5, 10, 25, 100, 200]
    targetMoney = 94
    output = false
    Every denomination is a multiple of 5, so you can't receive exactly 94 units of money in this currency.

  Example 2
    denominations = [4, 17, 29]
    targetMoney = 75
    output = true
    You can make 75 units with the denominations [17, 29, 29].
*/

function canGetExactChange(targetMoney, denominations, visited = new Set()) {
  if (targetMoney === 0) return true;
  if (targetMoney < 0 || visited.has(targetMoney)) return false;
  
  visited.add(targetMoney);

  return denominations.some((denom) => {
    return canGetExactChange(targetMoney - denom, denominations, visited);
  });  
}

// // Tests:
// function printString(str) {
//   var out = '["' + str + '"]';
//   return out;
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected == output);
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     var out = rightTick + ' Test #' + testCaseNumber;
//     console.log(out);
//   }
//   else {
//     var out = '';
//     out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//     out += printString(expected);
//     out += ' Your output: ';
//     out += printString(output);
//     console.log(out);
//   }
//   testCaseNumber++;
// }

// var target1 = 94;
// var arr1 = [5, 10, 25, 100, 200];
// var expected1 = false;
// var output1 = canGetExactChange(target1, arr1);
// check(expected1, output1);

// var target2 = 75;
// var arr2 = [4, 17, 29];
// var expected2 = true;
// var output2 = canGetExactChange(target2, arr2);
// check(expected2, output2);