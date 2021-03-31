/*
  https://leetcode.com/problems/k-closest-points-to-origin/
  Given an array of points where points[i] = [xi, yi] 
  represents a point on the X-Y plane and an integer k, 
  return the k closest points to the origin (0, 0).

  The distance between two points on the X-Y plane 
  is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

  You may return the answer in any order. 
  The answer is guaranteed to be unique (except for the order that it is in).

  Example 1:
    Input: points = [[1,3],[-2,2]], k = 1
    Output: [[-2,2]]
    Explanation:
    The distance between (1, 3) and the origin is sqrt(10).
    The distance between (-2, 2) and the origin is sqrt(8).
    Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
    We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

  Example 2:
    Input: points = [[3,3],[5,-1],[-2,4]], k = 2
    Output: [[3,3],[-2,4]]
    Explanation: The answer [[-2,4],[3,3]] would also be accepted.
*/

function kClosest(points, k) {
  const distances = points.map(([x, y]) => {
    return {
      distance: Math.sqrt(x ** 2 + y ** 2),
      point: [x, y],
    };
  });

  return _quickSelect(distances, k).map((e) => e.point);
}

function _quickSelect(arr, k, left = 0, right = arr.length - 1) {
  let pivotIdx = Math.ceil(left + Math.random() * (right - left));

  pivotIdx = _partition(arr, pivotIdx, left, right);

  if (pivotIdx === k - 1) return arr.slice(0, pivotIdx + 1);

  if (pivotIdx < k) {
    return _quickSelect(arr, k, pivotIdx + 1, right);
  } else {
    return _quickSelect(arr, k, left, pivotIdx - 1);
  }
}

function _partition(arr, pivotIdx, left, right) {
  const pivot = arr[pivotIdx].distance;
  let storeIdx = left;

  [arr[pivotIdx], arr[right]] = [arr[right], arr[pivotIdx]]; // move pivotIdx to end;

  for (let i = left; i <= right; i++) {
    if (arr[i].distance < pivot) {
      [arr[storeIdx], arr[i]] = [arr[i], arr[storeIdx]];
      storeIdx++;
    }
  }

  [arr[right], arr[storeIdx]] = [arr[storeIdx], arr[right]]; // move pivotIdx back;

  return storeIdx;
}

// console.log(
//   kClosest(
//     [
//       [1, 3],
//       [-2, 2],
//     ],
//     1
//   )
// );

// console.log(
//   kClosest([
//     [3, 3],
//     [5, -1],
//     [-2, 4],
//   ], 2)
// );