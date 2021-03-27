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

function minMeetingRooms2(meetings) {
  if (meetings.length === 0) return 0;

  const startQueue = meetings
    .sort((meetingA, meetingB) => meetingA[0] - meetingB[0])
    .map((meeting) => meeting[0]);

  const endQueue = meetings
    .sort((meetingA, meetingB) => meetingA[1] - meetingB[1])
    .map(meeting => meeting[1]);

  let meetingRoomCount = 1;
  let startPt = 1;
  let endPt = 0;

  while (startPt < meetings.length) {
    if (startQueue[startPt] >= endQueue[endPt]) {
      endPt++;
      meetingRoomCount--;
    }

    meetingRoomCount++;
    startPt++;
  }

  return meetingRoomCount;
}

// console.log(
//   minMeetingRooms([
//     [0, 30],
//     [5, 10],
//     [15, 20],
//   ]), 2
// );

// console.log(
//   minMeetingRooms([
//     [7, 10],
//     [2, 4],
//   ]), 1
// );

// console.log(
//   minMeetingRooms([
//     [13, 15],
//     [1, 13],
//     [6, 9],
//   ]),
//   2
// );

// console.log(
//   minMeetingRooms([
//     [1, 10],
//     [2, 7],
//     [3, 19],
//     [8, 12],
//     [10, 20],
//     [11, 30],
//   ]),
//   4
// );