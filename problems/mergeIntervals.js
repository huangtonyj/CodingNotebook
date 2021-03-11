/*
  Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

  Example 1:
    Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
    Output: [[1,6],[8,10],[15,18]]
    Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
    
  Example 2:
    Input: intervals = [[1,4],[4,5]]
    Output: [[1,5]]
    Explanation: Intervals [1,4] and [4,5] are considered overlapping.

  Constraints:
    1 <= intervals.length <= 104
    intervals[i].length == 2
    0 <= starti <= endi <= 104
*/

function mergeIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let [start, end] = intervals[0];
  
  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    
    if (currentStart <= end) {
      end = Math.max(end, currentEnd);
    } else {
      result.push([start, end]);
      [start, end] = [currentStart, currentEnd];
    }
  }
  
  result.push([start, end]);
  
  return result;
}

console.log(
  mergeIntervals([[1,3],[2,6],[8,10],[15,18]]), [[1,6],[8,10],[15,18]], '\n',
  mergeIntervals([[1,4],[4,5]]), [[1, 5]], '\n',
  mergeIntervals([[1,4],[2,3]]), [[1, 4]], '\n',
  mergeIntervals([[1,4],[0,4]]), [[0, 4]], '\n',
);