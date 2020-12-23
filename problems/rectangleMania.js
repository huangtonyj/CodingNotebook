/*
  Write a function that takes in a list of Cartesian coordinates (i.e., (x, y)
  coordinates) and returns the number of rectangles formed by these coordinates.

  A rectangle must have its four corners amongst the coordinates in order to be
  counted, and we only care about rectangles with sides parallel to the x and y
  axes (i.e., with rectangles horizontal and vertical sides--no diagonal sides).

  You can also assume that no coordinate will be farther than 100 units from the
  origin.

  Sample Input
    coords = [
      [0, 0], [0, 1], [1, 1], [1, 0],
      [2, 1], [2, 0], [3, 1], [3, 0],
    ]

    3 -|
    2 -|
    1 -|o o o o
    0 -|o o o o
        -------
        | | | |
        0 1 2 3

  Sample Output
    6
*/

// Loop through to get two combo of coords that aren't in the same row or col.
// Check if the other two corners exist.
function rectangleMania(coords) {
  let rectangleCount = 0;
  const coordsSet = new Set(coords.map(el => el.join('-')));

  for (let a = 0; a < coords.length; a++) {
    for (let b = 0; b < a; b++) {
      const [xA, yA] = coords[a];
      const [xB, yB] = coords[b];

      if (xA !== xB && yA !== yB) {
        const coordC = `${xA}-${yB}`;
        const coordD = `${xB}-${yA}`;

        if (coordsSet.has(coordC) && coordsSet.has(coordD)) rectangleCount++;
      }
    }
  }

  return rectangleCount / 2; // double counted two sets of corner
}

module.exports = rectangleMania;