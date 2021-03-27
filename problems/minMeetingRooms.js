/*
  Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
  return the minimum number of conference rooms required.

Example 1:
    Input: intervals = [[0,30],[5,10],[15,20]]
    Output: 2
  Example 2:
    Input: intervals = [[7,10],[2,4]]
    Output: 1
*/

/*
  1) Sort by start time
  2) Traverse through each meeting;
    a) Extract all meetings off minHeap ending before current start
    b) Add current end time to minHeap
    c) Compare heap size to running largest
*/

const Heap = require('../dataStructures/Heap');

function minMeetingRooms(meetings) {
  const minHeap = new Heap();
  let meetingRoomCount = 0;

  meetings.sort(([aStart, aEnd], [bStart, bEnd]) => aStart - bStart);

  for (const [start, end] of meetings) {
    while (minHeap.peek() < start) minHeap.extract();
    
    minHeap.insert(end);
    meetingRoomCount = Math.max(meetingRoomCount, minHeap.length());
  }

  return meetingRoomCount;
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]), 2
);

console.log(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ]), 1
);

console.log(
  minMeetingRooms([
    [1, 10],
    [2, 7],
    [3, 19],
    [8, 12],
    [10, 20],
    [11, 30],
  ]),
  4
);