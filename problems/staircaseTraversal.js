// ***
/*
  You're given two positive integers representing the height of a staircase and
  the maximum number of steps that you can advance up the staircase at a time.
  Write a function that returns the number of ways in which you can climb the
  staircase.

  For example, if you were given a staircase of height = 3 and
  maxSteps = 2 you could climb the staircase in 3 ways. You could
  take 1 step, 1 step, then 1 step, you could also take
  1 step, then 2 steps, and you could take 2 steps, then 1 step.

  Note that maxSteps <= height will always be true.

  Sample Input
    height = 4
    maxSteps = 2

  Sample Output
    5
    // You can climb the staircase in the following ways: 
    // 1, 1, 1, 1
    // 1, 1, 2
    // 1, 2, 1
    // 2, 1, 1
    // 2, 2
*/

/*
  staircaseTraversal(4, 2):
    f(4) = f(3) + f(2) = 3 + 2 = 5
    f(3) = f(2) + f(1) = 2 + 1 = 3
    f(2) = f(1) + f(0) = 1 + 1 = 2
    f(1) = f(0)
    f(0) = 1

  staircaseTraversal(4, 3):
    f(4) = f(3) + f(2) + f(1) = 4 + 2 + 1 = 7
    f(3) = f(2) + f(1) + f(0) = 2 + 1 + 1 = 4
    f(2) = f(1) + f(0)        = 1 + 1     = 2
    f(1) = f(0)
    f(0) = 1
*/

// O(n * k) time O(n) space
function staircaseTraversal1(height, maxSteps) {
	const ways = [1];

	for (let h = 1; h <= height; h++) {
			ways[h] = 0;
		for (let step = 1; step <= maxSteps; step++) {
			const prevStep = h - step;
			if (prevStep >= 0) ways[h] += ways[prevStep];
		}
	}
	
	return ways[height];
}

// O(n) time O(n) space
function staircaseTraversal(height, maxSteps) {
  const ways = [1];
  let accumulatedStepsOfLastNSteps = 0;

  for (let h = 1; h <= height; h++) {
    const windowStart = Math.max(h - maxSteps, 0);
    const windowEnd = h - 1;

    // Shift window if starting is greater than 1
    if (windowStart > 0) {
      accumulatedStepsOfLastNSteps -= ways[windowStart - 1];
    }
    accumulatedStepsOfLastNSteps += ways[windowEnd];

    ways.push(accumulatedStepsOfLastNSteps);
  }

  return ways[height];
}

module.exports = staircaseTraversal;