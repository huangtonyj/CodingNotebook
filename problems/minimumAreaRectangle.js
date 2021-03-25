/*
  You're given an array of points plotted on a 2D graph (the xy-plane). Write a
  function that returns the minimum area of any rectangle that can be formed
  using any 4 of these points such that the rectangle's sides are parallel to
  the x and y axes (i.e., only rectangles with horizontal and vertical sides
  should be considered--no rectangles with diagonal sides). If no rectangle can
  be formed, your function should return 0.

  The input array will contain points represented by arrays of two integers
  [x, y]. The input array will never contain duplicate points.

  Sample Input
    points = 
    [
      [1, 5],
      [5, 1],
      [4, 2],
      [2, 4],
      [2, 2],
      [1, 2],
      [4, 5],
      [2, 5],
      [-1, -2],
    ]

  Sample Output
    3
    // The rectangle with corners [1, 5], [2, 5], [1, 2], and [2, 2]
    // has the minimum area: 3.
*/

function minimumAreaRectangle(points) {
	let minArea = Infinity;
	const set = new Set(points.map(e => e.join(',')));
	
	for (let a = 0; a < points.length; a++) {
		const [xA, yA] = points[a];
		
		for (let b = a + 1; b < points.length; b++) {
			const [xB, yB] = points[b];
			const pointC = [xA, yB].join(',');
			const pointD = [xB, yA].join(',');
			
			if (xA === xB || yA === yB) continue;
			
			if (set.has(pointC) && set.has(pointD)) {
				minArea = Math.min(minArea, Math.abs((xA - xB) * (yA - yB)));
			}
		}
	}
	
	return minArea === Infinity ? 0 : minArea;
}

module.exports = minimumAreaRectangle;