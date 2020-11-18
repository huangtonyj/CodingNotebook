/*
You are the technical director of WSPT radio, serving listeners nationwide. 
For simplicity's sake we can consider each listener to live along a horizontal line stretching from 0 (west) to 1000 (east).

Given a list of N listeners, and a list of M radio towers, each placed at various locations along this line, 
determine what the minimum broadcast range would have to be in order for each listener's home to be covered.

For example, suppose 
  listeners = [1, 5, 11, 20], and 
  towers = [4, 8, 15]. 

In this case the minimum range would be 5, 
since that would be required for the tower at position 15 to reach the listener at position 20.
*/

function minimumBroadcastRange(listeners, towers) {
  let ans = 0;

  for (const listener of listeners) {
    let range = Infinity;
    
    for (const tower of towers) {
      const currentRange = Math.abs(listener - tower);
      range = Math.min(range, currentRange);
    }

    ans = Math.max(ans, range);
  }

  return ans;
}

// const listeners = [1, 5, 11, 20];
// const towers = [4, 8, 15];

// console.log(
//   minimumBroadcastRange(listeners, towers), 5
// );