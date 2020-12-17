/*
  Imagine that you want to schedule a meeting of a certain duration with a
  co-worker. You have access to your calendar and your co-worker's calendar
  (both of which contain your respective meetings for the day, in the form of
  [startTime, endTime]), as well as both of your daily bounds
  (i.e., the earliest and latest times at which you're available for meetings
  every day, in the form of [earliestTime, latestTime]).

  Write a function that takes in your calendar, your daily bounds, your
  co-worker's calendar, your co-worker's daily bounds, and the duration of the
  meeting that you want to schedule, and that returns a list of all the time
  blocks (in the form of [startTime, endTime]) during which you
  could schedule the meeting, ordered from earliest time block to latest.

  Note that times will be given and should be returned in military time. For
  example: 8:30, 9:01, and 23:56.

  Also note that the given calendar times will be sorted by start time in
  ascending order, as you would expect them to appear in a calendar application
  like Google Calendar.

  Sample Input
    calendar1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
    dailyBounds1 = ['9:00', '20:00']
    calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
    dailyBounds2 = ['10:00', '18:30']
    meetingDuration = 30

  Sample Output
    [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']]
*/

function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) { 
  const result = [];
  const [dailyStart1, dailyEnd1] = dailyBounds1.map(timeToFloat);
  const [dailyStart2, dailyEnd2] = dailyBounds2.map(timeToFloat);
  const duration = meetingDuration / 60;

  let currentTime = Math.max(dailyStart1, dailyStart2);
  let maxTime = Math.min(dailyEnd1, dailyEnd2);
  let index1 = 0;
  let index2 = 0;

  if (calendar1.length === 0 && calendar2.length === 0) {
    return [[floatToTime(currentTime), floatToTime(maxTime)]];
  }

  let [currentStart1, currentEnd1] = calendar1[index1].map(timeToFloat);
  let [currentStart2, currentEnd2] = calendar2[index2].map(timeToFloat);
  while (currentTime > currentStart1) {
    index1++;
    [currentStart1, currentEnd1] = calendar1[index1].map(timeToFloat);
  }

  while (currentTime > currentStart2) {
    index2++;
    [currentStart2, currentEnd2] = calendar2[index2].map(timeToFloat);
  }
  
  while (currentTime + duration <= maxTime ) {
    [currentStart1, currentEnd1] = calendar1[index1] && calendar1[index1].map(timeToFloat) || [24, 24];
    [currentStart2, currentEnd2] = calendar2[index2] && calendar2[index2].map(timeToFloat) || [24, 24];
    
    if (currentTime + duration <= currentStart1 && currentTime + duration <= currentStart2) {
      const endTime = Math.min(currentStart1, currentStart2, dailyEnd1, dailyEnd2);
      result.push([floatToTime(currentTime), floatToTime(endTime)]);
      currentTime = endTime;
    } else {
      if (currentTime + duration >= currentStart1) {
        index1++;
        currentTime = Math.max(currentTime, currentEnd1);
      }
      if (currentTime + duration >= currentStart2) {
        index2++;
        currentTime = Math.max(currentTime, currentEnd2);
      }
    }

    // console.log(floatToTime(currentTime));
    // console.log(calendar1[index1]);
    // console.log(calendar2[index2]);
    // console.log(result, '\n\n');
  }
  return result;
}

// helper function to convert 11:30 into 11.5 and back;
function timeToFloat(str) {
  const [hour, minute] = str.split(':');
  return parseInt(hour) + (minute / 60);
}

function floatToTime(float) {
  const hour = Math.floor(float);
  const minute = (float % 1 * 60).toFixed(0).toString().padStart(2, '0');

  return `${hour}:${minute}`;
}

const calendar1 = [
  // ['00:00', '09:00']
  ['9:00', '10:30'], 
  ['12:00', '13:00'], 
  ['16:00', '18:00']
  // ['20:00', '24:00']
];
const dailyBounds1 = ['9:00', '20:00'];
const calendar2 = [
  // ['00:00', '10:00']
  ['10:00', '11:30'], 
  ['12:30', '14:30'], 
  ['14:30', '15:00'], 
  ['16:00', '17:00'],
  // ['18:30', '24:00']
];
const dailyBounds2 = ['10:00', '18:30'];
const meetingDuration = 30;

const expected = [['11:30', '12:00'], ['15:00', '16:00'], ['18:00', '18:30']];

console.log(calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration));