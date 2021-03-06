/*
  You're given an array of points plotted on a 2D graph (the xy-plane). Write a
  function that returns the maximum number of points that a single line (or
  potentially multiple lines) on the graph passes through.

  The input array will contain points represented by an array of two integers
  [x, y]. The input array will never contain duplicate points and
  will always contain at least one point.

  Sample Input
    points = [
      [1, 1],
      [2, 2],
      [3, 3],
      [0, 4],
      [-2, 6],
      [4, 0],
      [2, 1],
    ]

  Sample Output
    4 // A line passes through points: [-2, -6], [0, 4], [2, 2], [4, 0].
*/

function lineThroughPoints(points) {
  const groups = {};
  let max = 1;

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < i; j++) {
      const pointA = points[i];
      const pointB = points[j];
      const [slope, intercept] = _getSlopeIntercept(pointA, pointB);
      const key = `${slope} ${intercept}`;

      if (!groups[key]) groups[key] = new Set();
      groups[key].add(pointA);
      groups[key].add(pointB);

      max = Math.max(max, groups[key].size);
    }
  }

  return max;
}

function _getSlopeIntercept(pointA, pointB) {
  const [xA, yA] = pointA;
  const [xB, yB] = pointB;

  const slope = (yB - yA) / (xB - xA);

  if (slope === Infinity || slope === -Infinity) {
    return [slope, xA];
  } else {
    const intercept = yA - slope * xA;
    return [slope, intercept];
  }
}

module.exports = lineThroughPoints;